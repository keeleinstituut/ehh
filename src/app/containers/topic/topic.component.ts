import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainersFacadeService } from '../containers.facade.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { StatesService } from '../../services/states/states.service';

@Component({
  selector: 'ehh-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  backButton = 'Hääldusharjutused';
  title: string;
  subscriptions$: Subscription[];
  order: number;

  constructor(
    private route: ActivatedRoute,
    private facade: ContainersFacadeService,
    private states: StatesService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const route$ = this.route.paramMap.subscribe((routeParams) => {
      const topicId = parseInt(routeParams.get('id'), 10);
      this.facade.fetchTopicInfo(topicId);
    });

    const states$ = this.states.appStates
      .subscribe(({ currentTopic }) => {
        this.title = currentTopic.title;
        this.order = currentTopic.ord;
      });

    this.subscriptions$ = [route$, states$];
  }

  goBack(): void {
    this.location.back();
  }
}
