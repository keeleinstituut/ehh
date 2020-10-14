import { Injectable } from '@angular/core';
import { EtLexApiService } from '../services/api/et-lex-api.service';
import { StatesService } from '../services/states/states.service';
import { TopicOneComponent } from './topic/components/topic-one/topic-one.component';
import { TopicTwoComponent } from './topic/components/topic-two/topic-two.component';

@Injectable()
export class ContainersFacadeService {

  private topicIntroComponents = {
    1: TopicOneComponent,
    2: TopicTwoComponent
  };

  constructor(
    private api: EtLexApiService,
    private states: StatesService,
  ) { }

  fetchTopics(): void {
    this.api.fetchTopics()
      .subscribe((topics) => {
        this.states.setTopics(topics);
      });
  }

  fetchTopicInfo(topicId: number): void {
    this.api.fetchTopicInfo(topicId)
      .subscribe((topicInfo) => {
        this.states.setTopicInfo(topicInfo);
      });
  }

  getTopicIntroComponent(topicId: number): any {
    return this.topicIntroComponents[topicId];
  }
}
