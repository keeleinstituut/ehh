import { Injectable } from '@angular/core';
import { EtLexApiService } from '../services/api/et-lex-api.service';
import { StatesService } from '../services/states/states.service';
import { TopicOneComponent } from './topic/components/topic-one/topic-one.component';
import { TopicTwoComponent } from './topic/components/topic-two/topic-two.component';
import { QuestionsService } from './exercise/services/question/questions.service';
import { QuestionItem } from './exercise/components/question-item';
import { ExerciseQuestions } from '../services/api/api.models';
import { ExerciseService } from './exercise/services/exercise/exercise.service';

@Injectable()
export class ContainersFacadeService {

  private topicIntroComponents = {
    2: TopicOneComponent,
    1: TopicTwoComponent
  };

  constructor(
    private api: EtLexApiService,
    private states: StatesService,
    private questionsService: QuestionsService,
    private exerciseService: ExerciseService
  ) { }

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
}
