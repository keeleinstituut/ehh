import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ehh-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() src: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

}
