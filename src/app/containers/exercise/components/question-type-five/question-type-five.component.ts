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
    styleUrls: ['./question-type-five.component.scss'],
    standalone: false
})
export class QuestionTypeFiveComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {
  private audioUrl: string;
  recordingTime = 3000;
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
    this.recordingTime = this.data.etalon_mictime ? this.data.etalon_mictime * 1000 : this.recordingTime;
  }

  async startRecording(): Promise<void> {
    this.initializeStatus();
    try {
      const mediaStream = await this.sound.getUserMediaDevices();
      this.recording = true;
      this.audioUrl = await this.sound.recordAudio(mediaStream, this.recordingTime);
      if (this.audioUrl && this.audioUrl.length) {
        this.readyToListenRecording = true;
        this.recording = false;
        await this.playRecording();
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
      }, this.recordingTime);
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
