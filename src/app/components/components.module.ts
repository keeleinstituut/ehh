import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { ForwardButtonComponent } from './forward-button/forward-button.component';
import { CircleComponent } from './circle/circle.component';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';
import { TopicsBackButtonComponent } from './topics-back-button/topics-back-button.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EllipsisTextComponent } from './ellipsis-text/ellipsis-text.component';
import { AudioButtonComponent } from './audio-button/audio-button.component';
import { ExerciseAudioComponent } from './exercise-audio/exercise-audio.component';
import { AudioImageListComponent } from './audio-image-list/audio-image-list.component';
import { GapWriteComponent } from './gap-write/gap-write.component';
import { AudioButtonListComponent } from './audio-button-list/audio-button-list.component';
import { SoundService } from '../services/sound/sound.service';
import { CheckupButtonComponent } from './checkup-button/checkup-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IllustrationButtonComponent } from './illustration-button/illustration-button.component';
import { DropAreaComponent } from './drop-area/drop-area.component';
import { DragItemComponent } from './drag-item/drag-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

const components = [
  ButtonComponent,
  HeaderComponent,
  TopicsListComponent,
  ForwardButtonComponent,
  CircleComponent,
  CardComponent,
  IconComponent,
  TopicsBackButtonComponent,
  ExerciseListComponent,
  ReadMoreComponent,
  ProgressBarComponent,
  GapWriteComponent,
  ProgressBarComponent,
  ReadMoreComponent,
  AudioButtonComponent,
  ExerciseAudioComponent,
  AudioImageListComponent,
  ProgressBarComponent,
  EllipsisTextComponent,
  AudioButtonListComponent,
  EllipsisTextComponent,
  GapWriteComponent,
  CheckupButtonComponent,
  IllustrationButtonComponent,
  DropAreaComponent,
  DragItemComponent,
  CheckboxComponent,
  RadioButtonComponent,
];

@NgModule({
  declarations: [...components],
  providers: [SoundService],
  imports: [CommonModule, ReactiveFormsModule, DragDropModule],
  exports: [...components]
})
export class ComponentsModule { }
