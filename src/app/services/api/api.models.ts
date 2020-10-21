export interface TopicItem {
  id: number;
  ord: number;
  title: string;
  total_exercises: number;
}

export interface TopicsDto {
  count: number;
  filter: any;
  items: TopicItem[];
  limit: any;
  total_count: 2;
}

export interface TopicExercise {
  feedback: string;
  id: number;
  ord: number;
  title: string;
  topic_id: number;
  topic_ord: number;
  total_questions: number;
}

export interface TopicInfoItem {
  exercises: TopicExercise[];
  id: number;
  ord: number;
  title: string;
  total_exercises: number;
}

export interface TopicInfoDto {
  item: TopicInfoItem;
}

export interface QuestionOption {
  gap_nr: number;
  id: number;
  img: string;
  iscorrect: number;
  ord: number;
  question_id: number;
  text: string;
  type: string;
  wav: string;
}

export interface Question {
  directive: string;
  etalon_img: string;
  etalon_text: string;
  etalon_wav: string;
  exercise_id: number;
  id: number;
  ord: number;
  topic_id: number;
  total_options: number;
  type: string;
}

export interface QuestionDto {
  item: {
    directive: string;
    etalon_img: string;
    etalon_text: string;
    etalon_wav: string;
    exercise_id: number;
    id: number;
    ord: number;
    topic_id: number;
    total_options: number;
    type: string;
    options: QuestionOption[];
  };
}

export interface ExerciseQuestions {
  count: number;
  filter: {
    exercise_id: number;
    topic_id: number
  };
  items: Question[];
  limit: any;
  total_count: 16;
}
