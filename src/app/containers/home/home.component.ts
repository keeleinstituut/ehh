import { Component, OnInit } from '@angular/core';
import { ContainersFacadeService } from '../containers.facade.service';
import { StatesService } from '../../services/states/states.service';
import { filter } from 'rxjs/operators';
import { TopicItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topicsList: TopicItem[];

  constructor(
    private facade: ContainersFacadeService,
    private states: StatesService,
  ) { }

  ngOnInit(): void {
    this.facade.fetchTopics();

    this.states.topics$
      .pipe(filter(topics => topics !== null))
      .subscribe((topics) => {
        this.topicsList = topics.items;
      });
  }

}
