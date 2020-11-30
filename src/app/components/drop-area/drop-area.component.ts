import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QuestionOption } from '../../services/api/api.models';
import { SoundService } from '../../services/sound/sound.service';

export interface SentItem {
  itemData: QuestionOption;
  controlName: string;
}

@Component({
  selector: 'ehh-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent implements OnInit {
  @Input() dropAreaId: string;
  @Input() connectedTo: string[];
  @Input() dragDisabled = false;
  @Output() itemArrived: EventEmitter<any> = new EventEmitter<any>();
  dropData: QuestionOption[] = [];
  playingSound = false;

  constructor(private sound: SoundService) { }

  ngOnInit(): void {}


  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length < 2) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
      const itemData = event.container.data[0];
      const controlName = event.container.id;
      this.itemArrived.emit({ itemData, controlName });
    }
  }

  limitItem(item: CdkDrag, drop: CdkDropList): boolean {
    return drop.data.length < 1;
  }

  async playAudio(audioUrl: string): Promise<void> {
    if (audioUrl?.length) {
      this.playingSound = true;
      const sound = await this.sound.playAudio(audioUrl);
      sound.on('end', () => {
        this.playingSound = false;
      });
    }
  }
}
