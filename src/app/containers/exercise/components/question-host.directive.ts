import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ehhQuestionHost]'
})
export class QuestionHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
