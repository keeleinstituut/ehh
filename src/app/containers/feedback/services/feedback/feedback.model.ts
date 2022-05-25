export interface FeedbackBody {
  comments: string;
  senderName: string;
  senderEmail: string;
  feedbackType: string;
  lastSearch: string;
  word: string;
}

export interface FeedbackResponse {
  status: string;
}
