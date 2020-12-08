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
import { QuestionTypeThreeComponent } from './exercise/components/question-type-three/question-type-three.component';
import { QuestionTypeFourComponent } from './exercise/components/question-type-four/question-type-four.component';
import { QuestionTypeFiveComponent } from './exercise/components/question-type-five/question-type-five.component';
import { QuestionsService } from './exercise/services/question/questions.service';
import { ExerciseService } from './exercise/services/exercise/exercise.service';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionBasicComponent } from './exercise/components/question.component';
import { ExerciseSummaryComponent } from './exercise/components/exercise-summary/exercise-summary.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UrlService } from '../services/url/url.service';
import { ModalModule } from '../modules/modal/modal.module';
import { FeedbackComponent } from './feedback/feedback.component';


const containers = [
  HomeComponent,
  TopicComponent,
  ExerciseComponent,
];

const components = [
  TopicOneComponent,
  TopicTwoComponent,
  QuestionTypeOneComponent,
  QuestionTypeTwoComponent,
  QuestionTypeThreeComponent,
  QuestionTypeFourComponent,
  QuestionTypeFiveComponent,
  QuestionBasicComponent,
  ExerciseSummaryComponent
];

const services = [
  ContainersFacadeService,
  QuestionsService,
  ExerciseService,
  UrlService
];

@NgModule({
  declarations: [...containers, ...components, QuestionHostDirective, FeedbackComponent, ],
  providers: [...services],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, DragDropModule, ModalModule],
})
export class ContainersModule { }
