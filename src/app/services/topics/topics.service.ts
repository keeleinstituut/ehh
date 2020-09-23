import { Injectable } from '@angular/core';
import { EtLexApiService } from '../../api/et-lex-api.service';

@Injectable()
export class TopicsService {

  constructor(private api: EtLexApiService) { }
}
