import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ContainersFacadeService } from './containers.facade.service';
import { TopicComponent } from './topic/topic.component';
import { TopicOneComponent } from './topic/components/topic-one/topic-one.component';
import { TopicTwoComponent } from './topic/components/topic-two/topic-two.component';
import { TopicThreeComponent } from './topic/components/topic-three/topic-three.component';
import { TopicFourComponent } from './topic/components/topic-four/topic-four.component';
import { TopicFiveComponent } from './topic/components/topic-five/topic-five.component';
import { TopicSixComponent } from './topic/components/topic-six/topic-six.component';
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
import { FeedbackService } from './feedback/services/feedback/feedback.service';

const containers = [
  HomeComponent,
  TopicComponent,
  ExerciseComponent,
];

const components = [
  TopicSixComponent,
  TopicFiveComponent,
  TopicFourComponent,
  TopicThreeComponent,
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
  UrlService,
  FeedbackService
];

@NgModule({
  declarations: [
    ...containers,
    ...components,
    QuestionHostDirective,
    FeedbackComponent
  ],
  providers: [...services],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    DragDropModule,
    ModalModule],
})
export class ContainersModule { }
