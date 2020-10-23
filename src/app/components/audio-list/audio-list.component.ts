import { Component, OnInit } from '@angular/core';

@Component({
selector: 'ehh-audio-list',
templateUrl: './audio-list.component.html',
styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent implements OnInit {
  
audioItems = [
{"title": "Palk1", "image":'palk_1.png'},
{"title": "Palk", "image":'palk_2.png'},
{"title": "Tall", "image":'tall_1.png'},
{"title": "Tall", "image":'tall_2.png'}
];

constructor() { }

ngOnInit(): void {
}

}
