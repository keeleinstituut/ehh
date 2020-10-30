import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { QuestionHostDirective } from './components/question-host.directive';
import { QuestionComponent } from './components/question.component';
import { ContainersFacadeService } from '../containers.facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { StatesService } from '../../services/states/states.service';
import { ExerciseQuestions, QuestionDto } from '../../services/api/api.models';

@Component({
  selector: 'ehh-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @ViewChild(QuestionHostDirective, { static: true }) questionHost: QuestionHostDirective;
  maxSteps: number;
  currentStep = 1;
  canMoveOn: boolean;
  showFeedback = true;
  private subscriptions$: Subscription[] = [];
  private topicId: number;
  private currentQuestions: ExerciseQuestions;
  private currentQuestion: QuestionDto;
  private componentRef: ComponentRef<QuestionComponent>;
  readyToCheck;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private facade: ContainersFacadeService,
    private route: ActivatedRoute,
    private router: Router,
    private states: StatesService,
  ) { }

  ngOnInit(): void {
    const params$ = this.getParams$();
    const currentQuestions$ = this.getCurrentQuestions$();
    const question$ = this.getQuestion$();
    this.subscriptions$ = [params$, currentQuestions$, question$];
  }

  ngOnDestroy(): void {
    this.states.setCurrentQuestions(null);
    this.states.setCurrentQuestion(null);
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  async backToTopic(): Promise<void> {
    await this.router.navigate([`topic/${this.topicId}`]);
  }

  private getParams$(): Subscription {
    return this.route.params
      .pipe(
        tap(({ topicId, exerciseId }) => {
          this.topicId = topicId;
          this.facade.getExerciseQuestions(topicId, exerciseId);
        }),
      ).subscribe(() => {});
  }

  private getCurrentQuestions$(): Subscription {
    return this.states.currentQuestions
      .pipe(filter(questions => questions !== null))
      .subscribe((currentQuestions) => {
        this.currentQuestions = currentQuestions;
        this.maxSteps = this.currentQuestions.total_count;
        this.facade.getQuestion(this.currentStep, this.currentQuestions);
    });
  }

  private getQuestion$(): Subscription {
    return this.states.question
      .pipe(filter(question => question !== null))
      .subscribe((question) => {
        this.currentQuestion = question;
        this.createQuestionComponent(this.currentQuestion.item);
      });
  }

  private createQuestionComponent(question: any): void {
    const questionComponent = this.facade.getQuestionComponent(question);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(questionComponent.component);

    const viewContainerRef = this.questionHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent<QuestionComponent>(componentFactory);
    this.componentRef.instance.data = questionComponent.data;

    const questionChecked$ = this.componentRef.instance.questionChecked.subscribe((answer) => {
      this.canMoveOn = answer;
    });
    const readyToCheck$ = this.componentRef.instance.readyToCheck.subscribe((readyToCheck) => {
      this.readyToCheck = readyToCheck;
    });
    const showFeedback$ = this.componentRef.instance.showFeedback.subscribe((showFeedback) => {
      console.log('showfeedback');
      console.log(showFeedback);
      this.showFeedback = showFeedback;
    });
    this.subscriptions$.push(questionChecked$, readyToCheck$, showFeedback$);
  }

  async checkQuestion(clickCount): Promise<void> {
    if (clickCount === 1) {
      this.facade.checkQuestion();
    } else if (clickCount === 2) {
      this.canMoveOn = null;
      await this.nextQuestion();
    }
  }

  async nextQuestion(): Promise<void> {
    const nextStep = this.currentStep + 1;
    if (nextStep > this.maxSteps) {
      const currentUrl = this.router.routerState.snapshot.url;
      await this.router.navigate([`${currentUrl}/summary`]);
      return;
    }
    this.currentStep += 1;
    this.facade.getQuestion(nextStep, this.currentQuestions);
  }
}
