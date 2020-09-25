import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ContainersFacadeService } from '../containers.facade.service';

@Component({
  selector: 'ehh-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  backButton = 'Hääldusharjutused';

  constructor(
    private route: ActivatedRoute,
    private facade: ContainersFacadeService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((routeParams) => {
      const topicId = parseInt(routeParams.get('id'), 10);
      this.facade.fetchTopicInfo(topicId);
    });
  }

}
