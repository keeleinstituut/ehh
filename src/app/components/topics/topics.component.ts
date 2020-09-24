import { Component, Input, OnInit } from '@angular/core';
import { TopicItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @Input() topics: TopicItem[] = [];

  countColors: string[] = ['#EADFE7', '#E5E1F5', '#E3E6FF', '#E1F4F7', '#F6E7CE', '#FDF1CC', '#E1EAD7', '#F3F6E4', '#FEE0E0', '#FFE9F9'];

  constructor() { }

  ngOnInit(): void {
  }

}
