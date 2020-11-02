import { Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { SoundService } from '../../../../services/sound/sound.service';
import { Question } from '../../../../services/api/api.models';

export interface PronounceEtalon {
  sound?: string;
  text?: string;
  image?: string;
}

@Component({
  selector: 'ehh-question-type-five',
  templateUrl: './question-type-five.component.html',
  styleUrls: ['./question-type-five.component.scss']
})
export class QuestionTypeFiveComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {
  private audioUrl: string;
  etalon: PronounceEtalon;
  readyToListenRecording = false;
  readyToCompare = false;

  constructor(private sound: SoundService) {
    super();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.questionChecked.emit(true);
      this.readyToCheck.emit(false);
      this.showFeedback.emit(false);
    }, 0);
    this.etalon = this.setEtalon(this.data);
  }

  async startRecording(): Promise<void> {
    this.initializeStatus();
    this.audioUrl = await this.sound.recordAudio();
    if (this.audioUrl !== undefined && this.audioUrl.length) {
      this.readyToListenRecording = true;
    }
  }

  async playRecording(): Promise<void> {
    await this.sound.getSoundFileAndPlay(this.audioUrl);
    this.readyToCompare = true;
  }

  async compareSound(soundPath: string): Promise<void> {
    await this.sound.getSoundFileAndPlay(soundPath);
    this.readyToCheck.emit(true);
  }

  private initializeStatus(): void {
    this.readyToListenRecording = false;
    this.readyToCompare = false;
  }

  private setEtalon(question: Question): PronounceEtalon {
    const pronounceEtalon: PronounceEtalon = { text: null, image: null, sound: null };
    pronounceEtalon.text = question.etalon_text ? question.etalon_text : null;
    pronounceEtalon.image = question.etalon_img ? question.etalon_img : null;
    return pronounceEtalon;
  }
}
