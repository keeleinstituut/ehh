import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-gap-write',
  templateUrl: './gap-write.component.html',
  styleUrls: ['./gap-write.component.scss']
})
export class GapWriteComponent implements OnInit {
  @Input() soundPath: string;

  constructor() { }

  ngOnInit(): void {
  }

  private async getSoundFile(audioContext, filepath): Promise<AudioBuffer> {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
  }

  private playSound(audioContext, audioBuffer): void {
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    sampleSource.connect(audioContext.destination);
    sampleSource.start();
  }

  async play(): Promise<void> {
    const audioContext = new AudioContext();
    const audioBuffer = await this.getSoundFile(audioContext, this.soundPath);
    this.playSound(audioContext, audioBuffer);
  }
}
