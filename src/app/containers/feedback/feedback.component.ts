import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContainersFacadeService } from '../containers.facade.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
    selector: 'ehh-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    standalone: false
})
export class FeedbackComponent implements OnInit, OnDestroy {
  formGroup: UntypedFormGroup;
  error = false;
  privacyTerms = false;
  feedbackSent = false;
  sendingFeedback = false;
  feedbackSendingError = false;
  private subscriptions$: Subscription[];

  constructor(private facade: ContainersFacadeService) { }

  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      description: new UntypedFormControl('', Validators.required),
      senderName: new UntypedFormControl('', Validators.required),
      senderEmail: new UntypedFormControl('', [Validators.required, Validators.email]),
      privacyTerms: new UntypedFormControl(this.privacyTerms),
    });

    const privacyTerms$ = this.formGroup.controls.privacyTerms.valueChanges
      .subscribe((value) => {
        this.privacyTerms = value;
      });

    const feedbackSent$ = this.facade.feedbackSent()
      .pipe(skip(1))
      .subscribe(feedbackSent => {
        this.feedbackSent = feedbackSent;
        this.sendingFeedback = false;
        this.feedbackSendingError = !feedbackSent;
      }, () => {
        this.sendingFeedback = false;
        this.feedbackSendingError = true;
      });

    this.subscriptions$ = [privacyTerms$, feedbackSent$];
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  closeModal(): void {
    this.facade.closeModal();
  }

  submit(): void {
    this.error = !this.formGroup.valid;
    if (this.error) return;
    this.sendingFeedback = true;
    this.feedbackSendingError = false;
    this.facade.sendFeedback(this.formGroup);
  }
}
