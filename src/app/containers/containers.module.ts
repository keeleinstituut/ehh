import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ContainersFacadeService } from './containers.facade.service';
import { TopicComponent } from './topic/topic.component';
import { TopicOneComponent } from './topic/components/topic-one/topic-one.component';
import { TopicTwoComponent } from './topic/components/topic-two/topic-two.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { QuestionTypeOneComponent } from './exercise/components/question-type-one/question-type-one.component';
import { QuestionTypeTwoComponent } from './exercise/components/question-type-two/question-type-two.component';
import { QuestionHostDirective } from './exercise/components/question-host.directive';

const containers = [
  HomeComponent,
  TopicComponent,
  ExerciseComponent,
];

const components = [
  TopicOneComponent,
  TopicTwoComponent,
  QuestionTypeOneComponent,
  QuestionTypeTwoComponent
];

const services = [
  ContainersFacadeService
];

@NgModule({
  declarations: [...containers, ...components, QuestionHostDirective],
  providers: [...services],
  imports: [CommonModule, ComponentsModule],
  exports: [...containers, ...components]
})
export class ContainersModule { }
