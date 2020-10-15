import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { QuestionTypeOneComponent } from './components/question-type-one/question-type-one.component';
import { QuestionHostDirective } from './components/question-host.directive';
import { QuestionItem } from './components/question-item';
import { QuestionComponent } from './components/question.component';
import { QuestionTypeTwoComponent } from './components/question-type-two/question-type-two.component';

@Component({
  selector: 'ehh-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @ViewChild(QuestionHostDirective, { static: true }) questionHost: QuestionHostDirective;
  maxSteps = 20;
  currentStep = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const questionType1 = new QuestionItem(QuestionTypeOneComponent, { directive: '' });
    const questionType2 = new QuestionItem(QuestionTypeTwoComponent, { directive: '' });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(questionType1.component);

    const viewContainerRef = this.questionHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<QuestionComponent>(componentFactory);
    componentRef.instance.data = questionType1.data;
    componentRef.instance.event.subscribe((value) => console.log(value));

  }

}
