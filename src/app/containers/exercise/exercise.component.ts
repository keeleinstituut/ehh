import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ExerciseTypeOneComponent } from './components/exercise-type-one/exercise-type-one.component';
import { QuestionHostDirective } from './components/question-host.directive';
import { QuestionItem } from './components/question-item';
import { QuestionComponent } from './components/question.component';
import { ExerciseTypeTwoComponent } from './components/exercise-type-two/exercise-type-two.component';

@Component({
  selector: 'ehh-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @ViewChild(QuestionHostDirective, {static: true}) ehhQuestionHost: QuestionHostDirective;
  maxSteps = 20;
  currentStep = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const questionType1 = new QuestionItem(ExerciseTypeOneComponent, { directive: '' });
    const questionType2 = new QuestionItem(ExerciseTypeTwoComponent, { directive: 'Olen siin' });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(questionType2.component);

    const viewContainerRef = this.ehhQuestionHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<QuestionComponent>(componentFactory);
    componentRef.instance.data = questionType2.data;
  }

}
