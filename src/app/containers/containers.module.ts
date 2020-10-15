import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ContainersFacadeService } from './containers.facade.service';
import { TopicComponent } from './topic/topic.component';
import { TopicOneComponent } from './topic/components/topic-one/topic-one.component';
import { TopicTwoComponent } from './topic/components/topic-two/topic-two.component';
import { ExerciseComponent } from './exercise/exercise.component';

const containers = [
  HomeComponent,
  TopicComponent,
  ExerciseComponent,
];

const components = [
  TopicOneComponent,
  TopicTwoComponent,
];

const services = [
  ContainersFacadeService
];

@NgModule({
  declarations: [...containers, ...components],
  providers: [...services],
  imports: [CommonModule, ComponentsModule],
  exports: [...containers, ...components]
})
export class ContainersModule { }
