import { QuestionsService } from './questions.service';
import { QuestionTypeOneComponent } from '../../components/question-type-one/question-type-one.component';

describe('QuestionsService', () => {
  it('should be created', () => {
    const service = new QuestionsService();

    expect(service).toBeTruthy();
  });

  it('should initialize a TYPE1 question with the matching component', () => {
    const service = new QuestionsService();
    const question = { type: 'TYPE1', id: 1 };

    const questionItem = service.initializeQuestion(question);

    expect(questionItem.component).toBe(QuestionTypeOneComponent);
    expect(questionItem.data).toEqual(question);
  });
});
