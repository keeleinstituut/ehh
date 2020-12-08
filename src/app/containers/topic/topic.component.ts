import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainersFacadeService } from '../containers.facade.service';
import { Subscription } from 'rxjs';
import { StatesService } from '../../services/states/states.service';
import { TopicExercise, TopicInfoItem } from '../../services/api/api.models';
import { filter } from 'rxjs/operators';
import { UrlService } from '../../services/url/url.service';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'ehh-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, AfterViewInit, OnDestroy {
  backButton = 'Hääldusharjutused';
  subscriptions$: Subscription[];
  exercises: TopicExercise[];
  currentTopic: TopicInfoItem;
  topicIntroComponent: any;
  menuOpened = false;
  previousUrl: string;

  @ViewChild('exerciseList') exerciseList: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facade: ContainersFacadeService,
    private states: StatesService,
    private urlService: UrlService
  ) { }

  ngOnInit(): void {
    const route$ = this.route.paramMap.subscribe((routeParams) => {
      const topicId = parseInt(routeParams.get('id'), 10);
      this.facade.fetchTopicInfo(topicId);
    });

    const states$ = this.states.appStates
      .pipe(filter(states => states.currentTopic !== null))
      .subscribe(({ currentTopic }) => {
        this.currentTopic = currentTopic;
        this.exercises = currentTopic.exercises;
        this.topicIntroComponent = this.facade.getTopicIntroComponent(this.currentTopic.id);
      });

    this.subscriptions$ = [route$, states$];
  }

  ngAfterViewInit(): void {
    this.scrollToExercises();
  }

  private scrollToExercises(): void {
    const url$ = this.urlService.previousUrl$.subscribe(previousUrl => {
      this.previousUrl = previousUrl;
      if (this.previousUrl === 'summary') {
        const targetElement = this.exerciseList.nativeElement;
        targetElement.scrollIntoView();
        this.urlService.setPreviousUrl(null);
      }
    });
    this.subscriptions$.push(url$);
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  async goBack(): Promise<void> {
    await this.router.navigate(['/']);
  }

  toggleMenu(value: boolean): void {
    this.menuOpened = value;
  }

  openModal(): void {
    this.facade.openModal(FeedbackComponent);
  }
}
