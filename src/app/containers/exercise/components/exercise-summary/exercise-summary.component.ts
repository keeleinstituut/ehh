import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StatesService } from '../../../../services/states/states.service';
import { TopicInfoItem } from '../../../../services/api/api.models';
import { ContainersFacadeService } from '../../../containers.facade.service';

@Component({
  selector: 'ehh-exercise-summary',
  templateUrl: './exercise-summary.component.html',
  styleUrls: ['./exercise-summary.component.scss']
})
export class ExerciseSummaryComponent implements OnInit, OnDestroy {
  backButton = 'Hääldusharjutused';
  subscriptions$: Subscription[];
  currentTopic: TopicInfoItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facade: ContainersFacadeService,
    private states: StatesService
  ) { }

  ngOnInit(): void {
    const route$ = this.route.paramMap.subscribe((routeParams) => {
      const topicId = parseInt(routeParams.get('topicId'), 10);
      this.facade.fetchTopicInfo(topicId);
    });

    const states$ = this.states.appStates
      .subscribe(({ currentTopic }) => {
        this.currentTopic = currentTopic;
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
