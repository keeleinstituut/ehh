import { Component, OnInit } from '@angular/core';

@Component({
selector: 'ehh-audio-image-list',
templateUrl: './audio-image-list.component.html',
styleUrls: ['./audio-image-list.component.scss']
})
export class AudioImageListComponent implements OnInit {
  
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
