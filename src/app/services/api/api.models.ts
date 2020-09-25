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
