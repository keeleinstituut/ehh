import { Injectable } from '@angular/core';
import { EtLexApiService } from '../services/api/et-lex-api.service';
import { StatesService } from '../services/states/states.service';
import { TopicOneComponent } from './topic/components/topic-one/topic-one.component';
import { TopicTwoComponent } from './topic/components/topic-two/topic-two.component';
import { TopicThreeComponent } from './topic/components/topic-three/topic-three.component';
import { TopicFourComponent } from './topic/components/topic-four/topic-four.component';
import { QuestionsService } from './exercise/services/question/questions.service';
import { QuestionItem } from './exercise/components/question-item';
import { ExerciseQuestions } from '../services/api/api.models';
import { ExerciseService } from './exercise/services/exercise/exercise.service';
import { ModalService } from '../modules/modal/modal.service';
import { FormGroup } from '@angular/forms';
import { FeedbackService } from './feedback/services/feedback/feedback.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ContainersFacadeService {

  feedbackSent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private topicIntroComponents = {
    6: TopicFourComponent,
    5: TopicThreeComponent,
    2: TopicOneComponent,
    1: TopicTwoComponent
  };

  constructor(
    private api: EtLexApiService,
    private states: StatesService,
    private questionsService: QuestionsService,
    private exerciseService: ExerciseService,
    private feedbackService: FeedbackService,
    private modal: ModalService
  ) { }

  feedbackSent(): Observable<boolean> {
    return this.feedbackSent$.asObservable();
  }

  fetchTopics(): void {
    this.api.fetchTopics()
      .subscribe((topics) => {
        this.states.setTopics(topics);
      });
  }

  fetchTopicInfo(topicId: number): void {
    this.api.fetchTopicInfo(topicId)
      .subscribe((topicInfo) => {
        this.states.setTopicInfo(topicInfo);
      });
  }

  getTopicIntroComponent(topicId: number): any {
    return this.topicIntroComponents[topicId];
  }

  getExerciseQuestions(topicId: number, exerciseId: number): void {
    this.api.fetchExerciseQuestions(topicId, exerciseId)
      .subscribe(questions => this.states.setCurrentQuestions(questions));
  }

  getQuestion(currentStep: number, currentQuestions: ExerciseQuestions): void {
    const questions = currentQuestions.items;
    const currentQuestion = questions[currentStep - 1];
    this.api.fetchQuestion(currentQuestion.topic_id, currentQuestion.exercise_id, currentQuestion.id)
      .subscribe(question => this.states.setCurrentQuestion(question));
  }

  getQuestionComponent(question: any, data?: any): QuestionItem {
    return this.questionsService.initializeQuestion(question, data);
  }

  checkQuestion(): void {
    this.exerciseService.checkQuestion();
  }

  setCurrentQuestionsSessionStorage(questions: ExerciseQuestions): void {
    this.questionsService.setCurrentQuestionsSessionStorage(questions);
  }

  getCurrentQuestionsSessionStorage(): ExerciseQuestions {
    return this.questionsService.getCurrentQuestionsSessionStorage();
  }

  clearCurrentQuestionsSessionStorage(): void {
    this.questionsService.clearCurrentQuestionsSessionStorage();
  }

  getCurrentExerciseId(): number {
    const currentQuestions = this.getCurrentQuestionsSessionStorage();
    if (currentQuestions) return currentQuestions.filter.exercise_id;
    return null;
  }

  setExerciseDone(topicId: number, exerciseId: number): void {
    this.api.exerciseDone(topicId, exerciseId).subscribe();
    sessionStorage.clear();
  }

  openModal(component: any): void {
    this.modal.openModal(component);
  }

  closeModal(): void {
    this.modal.closeModal();
  }

  sendFeedback(form: FormGroup): void {
    this.feedbackService.sendFeedback(form)
      .subscribe((status) => {
        this.feedbackSent$.next(status);
      }, () => { this.feedbackSent$.next(false); });
  }

  sendAnswer(correctAnswer: boolean, topicId: number, exerciseId: number, questionId: number): void {
    if (correctAnswer) {
      this.api.questionRight(topicId, exerciseId, questionId).subscribe();
    } else {
      this.api.questionWrong(topicId, exerciseId, questionId).subscribe();
    }
  }
}
