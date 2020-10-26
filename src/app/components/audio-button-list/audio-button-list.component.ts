import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'ehh-audio-button-list',
  templateUrl: './audio-button-list.component.html',
  styleUrls: ['./audio-button-list.component.scss']
})
export class AudioButtonListComponent implements OnInit {

  @Input() list : any;

  constructor() { }

  ngOnInit(): void {
  }

}
