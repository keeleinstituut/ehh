import { Injectable } from '@angular/core';
import { EtLexApiService } from '../services/api/et-lex-api.service';
import { BehaviorSubject } from 'rxjs';
import { StatesService } from '../services/states/states.service';

@Injectable()
export class ContainersFacadeService {

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
}
