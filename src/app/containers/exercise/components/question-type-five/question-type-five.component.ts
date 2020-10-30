import { Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { SoundService } from '../../../../services/sound/sound.service';

@Component({
  selector: 'ehh-question-type-five',
  templateUrl: './question-type-five.component.html',
  styleUrls: ['./question-type-five.component.scss']
})
export class QuestionTypeFiveComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {
  private audioUrl: string;
  constructor(private sound: SoundService) {
    super();
  }

  audio: HTMLAudioElement;

  ngOnInit(): void {
    console.log(this.data);
    this.questionChecked.emit(true);
    this.readyToCheck.emit(false);
    this.showFeedback.emit(false);
  }

  async startRecording(): Promise<void> {
    this.audioUrl = await this.sound.recordAudio();
  }

  async playRecording(): Promise<void> {
    await this.sound.getSoundFileAndPlay(this.audioUrl);
  }
}
