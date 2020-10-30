import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  constructor() { }

  async getSoundFile(audioContext, filepath): Promise<AudioBuffer> {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
  }

  playSound(audioContext, audioBuffer): void {
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    sampleSource.connect(audioContext.destination);
    sampleSource.start();
  }
}
