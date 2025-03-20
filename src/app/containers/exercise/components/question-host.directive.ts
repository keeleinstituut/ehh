import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ehhQuestionHost]',
    standalone: false
})
export class QuestionHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
