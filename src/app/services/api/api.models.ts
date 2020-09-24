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
