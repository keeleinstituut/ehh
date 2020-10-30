import { Injectable } from '@angular/core';
import { sample } from 'rxjs/operators';

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

@Injectable()
export class SoundService {

  sampleSource: AudioBufferSourceNode;

  constructor() { }

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

  async getSoundFileAndPlay(filepath): Promise<void> {
    const audioContext = new AudioContext();
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    await audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
      this.playSound(audioContext, audioBuffer);
    });
  }

  async recordAudio(recordingLength: number = 3000): Promise<string> {
    return new Promise(async (resolve) => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorder.start();

      const audioChunks = [];

      mediaRecorder.addEventListener('dataavailable', event => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener('stop', async () => {
        console.log('Heli salvestatud');
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        resolve(audioUrl);
      });

      setTimeout(() => {
        mediaRecorder.stop();
      }, recordingLength);
    });
  }
}
