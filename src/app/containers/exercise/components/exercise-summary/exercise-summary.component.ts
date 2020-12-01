import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StatesService } from '../../../../services/states/states.service';
import { TopicExercise, TopicInfoItem } from '../../../../services/api/api.models';
import { ContainersFacadeService } from '../../../containers.facade.service';
import { filter, take } from 'rxjs/operators';
import { UrlService } from '../../../../services/url/url.service';

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
  feedbackImages: string[];
  private topicId: number;
  private exerciseId: number;
  private currentExercise: TopicExercise;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facade: ContainersFacadeService,
    private states: StatesService,
    private urlService: UrlService
  ) { }

  async ngOnInit(): Promise<void> {
    this.exerciseId = this.facade.getCurrentExerciseId();
    if (this.exerciseId) {
      const route$ = this.route.paramMap.subscribe((routeParams) => {
        this.topicId = parseInt(routeParams.get('topicId'), 10);
        this.facade.fetchTopicInfo(this.topicId);
      });

      const states$ = this.states.appStates
        .pipe(filter(states => states.currentTopic !== null), take(1))
        .subscribe(async ({ currentTopic }) => {
          this.currentTopic = currentTopic;
          this.currentExercise = this.getCurrentExercise(currentTopic);
          this.feedback = this.currentExercise.feedback;
          this.feedbackImages = this.getFeedbackImages(this.currentExercise);
          this.facade.setExerciseDone(this.currentExercise.topic_id, this.currentExercise.id);
        });

      this.setCurrentUrl();

      this.subscriptions$ = [route$, states$];
    } else {
      await this.router.navigateByUrl('/');
    }
  }

  private getCurrentExercise(currentTopic: TopicInfoItem): TopicExercise {
    return currentTopic.exercises.find(exercise => exercise.id === this.exerciseId);
  }

  ngOnDestroy(): void {
    if (this.subscriptions$?.length) {
      this.subscriptions$.forEach(subscription => subscription.unsubscribe());
    }
  }

  private setCurrentUrl(): void {
    const currentUrl = this.route.snapshot.data?.pathName;
    this.urlService.setPreviousUrl(currentUrl);
  }

  async goBack(): Promise<void> {
    this.facade.clearCurrentQuestionsSessionStorage();
    await this.router.navigate(['/']);
  }

  async backToQuestions(): Promise<void> {
    this.facade.clearCurrentQuestionsSessionStorage();
    await this.router.navigate([`topic/${this.topicId}`]);
  }

  async backToTopics(): Promise<void> {
    this.facade.clearCurrentQuestionsSessionStorage();
    await this.router.navigate(['topic']);
  }

  private getFeedbackImages(currentExercise: TopicExercise): string[] {
    if (currentExercise.feedback_img1 || currentExercise.feedback_img2) {
      return [currentExercise.feedback_img1, currentExercise.feedback_img2];
    }
    return null;
  }
}
