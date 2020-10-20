import {
  Component,
  ComponentFactoryResolver, OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { QuestionTypeOneComponent } from './components/question-type-one/question-type-one.component';
import { QuestionHostDirective } from './components/question-host.directive';
import { QuestionItem } from './components/question-item';
import { QuestionComponent } from './components/question.component';
import { QuestionTypeTwoComponent } from './components/question-type-two/question-type-two.component';
import { ContainersFacadeService } from '../containers.facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { StatesService } from '../../services/states/states.service';
import { ExerciseQuestions } from '../../services/api/api.models';

@Component({
  selector: 'ehh-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @ViewChild(QuestionHostDirective, { static: true }) questionHost: QuestionHostDirective;
  maxSteps: number;
  currentStep = 1;
  private subscriptions$: Subscription[];
  private topicId: number;
  private currentQuestions: ExerciseQuestions;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private facade: ContainersFacadeService,
    private route: ActivatedRoute,
    private router: Router,
    private states: StatesService,
  ) { }

  ngOnInit(): void {
    const params$ = this.route.params
      .pipe(
        tap(({ topicId, exerciseId }) => {
          this.topicId = topicId;
          this.facade.getExerciseQuestions(topicId, exerciseId);
        }),
      ).subscribe(() => {});

    const currentQuestions$ = this.states.appStates
      .pipe(filter(states => states.currentQuestions !== null))
      .subscribe((states) => {
        this.currentQuestions = states.currentQuestions;
        this.maxSteps = this.currentQuestions.total_count;
      });

    this.subscriptions$ = [params$, currentQuestions$];

    const questionType1 = new QuestionItem(QuestionTypeOneComponent, { directive: '' });
    const questionType2 = new QuestionItem(QuestionTypeTwoComponent, { directive: '' });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(questionType1.component);

    const viewContainerRef = this.questionHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<QuestionComponent>(componentFactory);
    componentRef.instance.data = questionType1.data;
    componentRef.instance.event.subscribe((value) => console.log(value));

  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  async backToTopic(): Promise<void> {
    await this.router.navigate([`topic/${this.topicId}`]);
  }
}
