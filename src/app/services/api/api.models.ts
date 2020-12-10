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
  feedback_img1: string;
  feedback_img2: string;
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
  dragItemPosition?: number;
  selected?: boolean;
}

export interface Question {
  directive: string;
  etalon_img: string;
  etalon_text: string;
  etalon_wav: string;
  etalon_wav_gap1: string;
  etalon_wav_gap2: string;
  etalon_wav_gap3: string;
  etalon_wav_gap4: string;
  etalon_mictime: number;
  exercise_id: number;
  id: number;
  img: string;
  ord: number;
  topic_id: number;
  total_options: number;
  type: string;
  options?: string;
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

export interface AudioItem {
  audioURL: string;
  image?: string;
  title?: string;
  border?: boolean;
}
