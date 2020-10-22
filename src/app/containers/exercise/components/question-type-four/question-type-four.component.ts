import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Question } from '../../../../services/api/api.models';
import { Subscription } from 'rxjs';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent implements OnInit, OnDestroy {
  @Input() data: Question;
  @Output() questionChecked: EventEmitter<any> = new EventEmitter<any>();
  subscription: Subscription;
  formGroup: FormGroup;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.setForm();
    console.log(this.data);
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  private setForm(): void {
    this.formGroup = new FormGroup({
      gapControl: new FormControl('')
    });
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE4 küsimust');
    this.questionChecked.emit(true);
  }

}
