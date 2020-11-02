import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StatesService } from '../../../../services/states/states.service';
import { TopicInfoItem } from '../../../../services/api/api.models';
import { ContainersFacadeService } from '../../../containers.facade.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ehh-exercise-summary',
  templateUrl: './exercise-summary.component.html',
  styleUrls: ['./exercise-summary.component.scss']
})
export class ExerciseSummaryComponent implements OnInit, OnDestroy {
  backButton = 'Hääldusharjutused';
  subscriptions$: Subscription[];
  currentTopic: TopicInfoItem;
  feedback: string;
  private topicId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facade: ContainersFacadeService,
    private states: StatesService
  ) { }

  ngOnInit(): void {
    const route$ = this.route.paramMap.subscribe((routeParams) => {
      this.topicId = parseInt(routeParams.get('topicId'), 10);
      this.facade.fetchTopicInfo(this.topicId);
    });

    const states$ = this.states.appStates
      .pipe(filter(states => states.currentTopic !== null))
      .subscribe(({ currentTopic }) => {
        this.currentTopic = currentTopic;
        this.feedback = this.getExerciseFeedback(this.currentTopic);
      });

    this.subscriptions$ = [route$, states$];
  }

  private getExerciseFeedback(currentTopic): string {
    const currentQuestions = this.facade.getCurrentQuestionsSessionStorage();
    const exerciseId = currentQuestions.filter.exercise_id;
    return currentTopic.exercises.find(exercise => exercise.id === exerciseId).feedback;
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  async goBack(): Promise<void> {
    this.facade.clearCurrentQuestionsSessionStorage();
    await this.router.navigate(['/']);
  }

  async backToQuestions(): Promise<void> {
    this.facade.clearCurrentQuestionsSessionStorage();
    await this.router.navigate([`topic/${this.topicId}`]);
  }
}
