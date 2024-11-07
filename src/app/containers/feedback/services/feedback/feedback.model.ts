export interface FeedbackBody {
  description: string;
  senderName: string;
  senderEmail: string;
  feedbackType: string;
  word: string;
}

export interface FeedbackResponse {
  status: string;
}
