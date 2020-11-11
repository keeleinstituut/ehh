import { Injectable } from '@angular/core';
import { Howl, HowlOptions } from 'howler';

// Needed because of Safari browser
const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

@Injectable()
export class SoundService {

  sampleSource: AudioBufferSourceNode;

  constructor() { }

  // TODO Obsolete
  async getSoundFile(audioContext, filepath): Promise<AudioBuffer> {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
  }

  // TODO Obsolete
  playSound(audioContext, audioBuffer): void {
    this.sampleSource = audioContext.createBufferSource();
    this.sampleSource.buffer = audioBuffer;
    this.sampleSource.connect(audioContext.destination);
    this.sampleSource.start();
  }

  // TODO Obsolete
  async getSoundFileAndPlay(filepath): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const audioContext = new AudioContext();
      const response = await fetch(filepath);
      const arrayBuffer = await response.arrayBuffer();
      await audioContext.decodeAudioData(arrayBuffer,
        (audioBuffer) => {
          this.playSound(audioContext, audioBuffer);
          resolve(true);
        },
        (error) => {
          console.error(error);
          reject(false);
        });
    });
  }

  // TODO Obsolete
  clearSampleSource(): void {
    this.sampleSource = null;
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
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        resolve(audioUrl);
      });

      setTimeout(() => {
        mediaRecorder.stop();
      }, recordingLength);
    });
  }


  playAudio(audioURL: string, audioFormat?: string): Promise<Howl> {
    const options = this.setAudioOptions(audioURL, audioFormat);
    return new Promise((resolve) => {
      const sound = new Howl(options);
      sound.play();
      resolve(sound);
    });
  }

  private setAudioOptions(audioURL: string, audioFormat: string): HowlOptions {
    return {
      src: [audioURL],
      format: [audioFormat]
    };
  }
}
