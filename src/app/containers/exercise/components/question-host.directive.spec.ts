import { QuestionHostDirective } from './question-host.directive';
import { ViewContainerRef } from '@angular/core';

describe('QuestionHostDirective', () => {
  it('should create an instance', () => {
    const directive = new QuestionHostDirective({} as ViewContainerRef);

    expect(directive).toBeTruthy();
  });
});
