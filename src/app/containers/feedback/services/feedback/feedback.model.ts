export interface FeedbackBody {
  comments: string;
  sender: string;
  email: string;
  feedbackType: string;
  lastSearch: string;
  word: string;
}

export interface FeedbackResponse {
  status: string;
}
