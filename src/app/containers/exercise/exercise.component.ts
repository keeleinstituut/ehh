import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { QuestionHostDirective } from './components/question-host.directive';
import { QuestionComponent } from './components/question.component';
import { ContainersFacadeService } from '../containers.facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { StatesService } from '../../services/states/states.service';
import { ExerciseQuestions, Question, QuestionDto } from '../../services/api/api.models';

@Component({
  selector: 'ehh-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @ViewChild(QuestionHostDirective, { static: true }) questionHost: QuestionHostDirective;
  maxSteps: number;
  currentStep = 1;
  correctAnswer: boolean;
  showFeedback = true;
  readyToCheck: boolean;
  private subscriptions$: Subscription[] = [];
  private topicId: number;
  private currentQuestions: ExerciseQuestions;
  private currentQuestion: QuestionDto;
  private componentRef: ComponentRef<QuestionComponent>;

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
        this.currentQuestions = { ...currentQuestions };
        this.facade.setCurrentQuestionsSessionStorage(currentQuestions);
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

    this.subscribeQuestionEvents();
  }

  private subscribeQuestionEvents(): void {
    const questionChecked$ = this.componentRef.instance.questionChecked.subscribe((answer) => {
      this.correctAnswer = answer;
    });
    const readyToCheck$ = this.componentRef.instance.readyToCheck.subscribe((readyToCheck) => {
      setTimeout(() => {
        this.readyToCheck = readyToCheck;
      });
    });
    const showFeedback$ = this.componentRef.instance.showFeedback.subscribe((showFeedback) => {
      this.showFeedback = showFeedback;
    });
    this.subscriptions$.push(questionChecked$, readyToCheck$, showFeedback$);
  }

  async checkQuestion(clickCount): Promise<void> {
    if (clickCount === 1 ) {
      this.facade.checkQuestion();
    } else if (clickCount === 2) {
      await this.nextQuestion();
    }
  }

  async nextQuestion(): Promise<void> {
    const exerciseId = this.currentQuestion.item.exercise_id;
    const questionId = this.currentQuestion.item.id;
    const topicId = this.currentQuestion.item.topic_id;

    this.facade.sendAnswer(this.correctAnswer, topicId, exerciseId, questionId);
    this.currentStep = this.correctAnswer ? this.currentStep += 1 : this.currentStep;
    if (this.currentStep > this.maxSteps) {
      await this.goToSummary();
      this.correctAnswer = null;
      return;
    }
    this.componentRef.destroy();
    if (!this.correctAnswer) this.currentQuestions.items = this.moveWrongAnswerToEnd();
    this.facade.getQuestion(this.currentStep, this.currentQuestions);
    this.correctAnswer = null;
  }

  private async goToSummary(): Promise<void> {
    const currentUrl = this.router.routerState.snapshot.url;
    await this.router.navigate([`${currentUrl}/summary`]);
  }

  private moveWrongAnswerToEnd(): Question[] {
    const currentQuestionItems = [ ...this.currentQuestions.items ];
    const currentQuestionIndex = this.currentQuestions.items
      .findIndex(question => question.id === this.currentQuestion.item.id);
    const currentQuestion = this.currentQuestions.items[currentQuestionIndex];
    currentQuestionItems.splice(currentQuestionIndex, 1);
    currentQuestionItems.push(currentQuestion);
    return currentQuestionItems;
  }
}
