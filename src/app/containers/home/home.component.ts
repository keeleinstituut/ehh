import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContainersFacadeService } from '../containers.facade.service';
import { States, StatesService } from '../../services/states/states.service';
import { filter } from 'rxjs/operators';
import { TopicItem } from '../../services/api/api.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ehh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  topicsList: TopicItem[];
  private subscription: Subscription;

  constructor(
    private facade: ContainersFacadeService,
    private states: StatesService,
  ) { }

  ngOnInit(): void {
    this.facade.fetchTopics();

    this.subscription = this.states.appStates
      .pipe(filter(states => states !== null))
      .subscribe((states: States) => {
        this.topicsList = states.topicsList.items;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
