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

const components = [
  ButtonComponent,
  HeaderComponent,
  TopicsListComponent,
  ForwardButtonComponent,
  CircleComponent,
  CardComponent,
  IconComponent,
  TopicsBackButtonComponent,
  ExerciseListComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class ComponentsModule { }
