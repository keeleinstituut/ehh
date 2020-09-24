import { Component, Input, OnInit } from '@angular/core';
import { TopicItem } from '../../services/api/api.models';
import { Router } from '@angular/router';

@Component({
  selector: 'ehh-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {
  @Input() topics: TopicItem[] = [];

  countColors: string[] = ['#EADFE7', '#E5E1F5', '#E3E6FF', '#E1F4F7', '#F6E7CE', '#FDF1CC', '#E1EAD7', '#F3F6E4', '#FEE0E0', '#FFE9F9'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async goToTopic(id: number): Promise<void> {
    await this.router.navigateByUrl(`/topic/${id}`);
  }
}
