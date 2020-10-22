import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../../../services/api/api.models';
import { Subscription } from 'rxjs';
import { ExerciseService } from '../../services/exercise/exercise.service';

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent implements OnInit {
  @Input() data: Question;
  @Output() questionChecked: EventEmitter<any> = new EventEmitter<any>();
  subscription: Subscription;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE4 küsimust');
    this.questionChecked.emit(true);
  }

}
