import { Injectable } from '@angular/core';
import { QuestionItem } from '../components/question-item';
import { QuestionTypeOneComponent } from '../components/question-type-one/question-type-one.component';
import { QuestionTypeTwoComponent } from '../components/question-type-two/question-type-two.component';
import { QuestionTypeThreeComponent } from '../components/question-type-three/question-type-three.component';
import { QuestionTypeFourComponent } from '../components/question-type-four/question-type-four.component';
import { QuestionTypeFiveComponent } from '../components/question-type-five/question-type-five.component';

@Injectable()
export class QuestionsService {

  private questionComponents = {
    TYPE1: QuestionTypeOneComponent,
    TYPE2: QuestionTypeTwoComponent,
    TYPE3: QuestionTypeThreeComponent,
    TYPE4: QuestionTypeFourComponent,
    TYPE5: QuestionTypeFiveComponent
  };

  constructor() { }

  initializeQuestion(question: any, data?: any): QuestionItem {
    return new QuestionItem(this.questionComponents[question.type], { ...question });
  }
}
