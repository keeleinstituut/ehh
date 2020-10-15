import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainersFacadeService } from '../containers.facade.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { StatesService } from '../../services/states/states.service';
import { TopicExercise, TopicInfoItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnDestroy {
  backButton = 'Hääldusharjutused';
  subscriptions$: Subscription[];
  exercises: TopicExercise[];
  currentTopic: TopicInfoItem;
  topicIntroComponent: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facade: ContainersFacadeService,
    private states: StatesService,
  ) { }

  ngOnInit(): void {
    const route$ = this.route.paramMap.subscribe((routeParams) => {
      const topicId = parseInt(routeParams.get('id'), 10);
      this.facade.fetchTopicInfo(topicId);
    });

    const states$ = this.states.appStates
      .subscribe(({ currentTopic }) => {
        this.currentTopic = currentTopic;
        this.exercises = currentTopic.exercises;
        this.topicIntroComponent = this.facade.getTopicIntroComponent(this.currentTopic.id);
      });

    this.subscriptions$ = [route$, states$];
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  async goBack(): Promise<void> {
    await this.router.navigate(['/']);
  }
}
