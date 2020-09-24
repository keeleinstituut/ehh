import { Component, Input, OnInit } from '@angular/core';
import { TopicItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @Input() topics: TopicItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
