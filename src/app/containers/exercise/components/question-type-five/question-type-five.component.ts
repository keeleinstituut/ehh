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
  recording = false;
  playingRecording = false;
  readyToListenRecording = false;
  readyToCompare = false;
  soundRecordingError = false;

  constructor(private sound: SoundService) {
    super();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.questionChecked.emit(true);
      this.readyToCheck.emit(true);
      this.showFeedback.emit(false);
    });
    this.etalon = this.setEtalon(this.data);
  }

  async startRecording(): Promise<void> {
    this.initializeStatus();
    try {
      const mediaStream = await this.sound.getUserMediaDevices();
      this.recording = true;
      this.audioUrl = await this.sound.recordAudio(mediaStream);
      if (this.audioUrl && this.audioUrl.length) {
        this.readyToListenRecording = true;
        this.recording = false;
      }
    } catch (error) {
      this.recording = false;
      this.soundRecordingError = true;
    }
  }

  async playRecording(): Promise<void> {
    if (this.readyToListenRecording) {
      this.playingRecording = true;
      const recording = await this.sound.playAudio(this.audioUrl, 'wav');
      recording.on('end', () => {
        this.readyToCompare = true;
        this.playingRecording = false;
      });
      setTimeout(() => {
        this.readyToCompare = true;
        this.playingRecording = false;
      }, 3500);
    }
  }

  async compareSound(soundPath: string): Promise<void> {
    if (this.readyToCompare) {
      await this.sound.playAudio(soundPath);
      this.readyToCheck.emit(true);
    }
  }

  private initializeStatus(): void {
    this.soundRecordingError = false;
    this.readyToListenRecording = false;
    this.readyToCompare = false;
    this.playingRecording = false;
  }

  private setEtalon(question: Question): PronounceEtalon {
    const pronounceEtalon: PronounceEtalon = { text: null, image: null, sound: null };
    pronounceEtalon.text = question.etalon_text ? question.etalon_text : null;
    pronounceEtalon.image = question.etalon_img ? question.etalon_img : null;
    return pronounceEtalon;
  }
}
