import { Injectable } from '@angular/core';
import { sample } from 'rxjs/operators';

@Injectable()
export class SoundService {

  constructor() { }

  sampleSource: any;

  async getSoundFile(audioContext, filepath): Promise<AudioBuffer> {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
  }

  playSound(audioContext, audioBuffer): void {
    this.sampleSource = audioContext.createBufferSource();
    this.sampleSource.buffer = audioBuffer;
    this.sampleSource.connect(audioContext.destination);
    this.sampleSource.start();
  }
}
