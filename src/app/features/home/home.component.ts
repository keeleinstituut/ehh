import { Component, OnInit } from '@angular/core';
import { EtLexApiService } from '../../api/et-lex-api.service';

@Component({
  selector: 'ehh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: EtLexApiService) { }

  ngOnInit(): void {
    this.api.getTopics()
      .subscribe((topics) => {
        console.log(topics);
      });
  }

}
