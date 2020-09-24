import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { ForwardButtonComponent } from './forward-button/forward-button.component';
import { CircleComponent } from './circle/circle.component';

const components = [
  ButtonComponent,
  HeaderComponent,
  TopicsListComponent,
  ForwardButtonComponent,
  CircleComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class ComponentsModule { }
