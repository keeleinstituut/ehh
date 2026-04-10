import { Component, Input } from '@angular/core';

export interface WordsList {
  header: string;
  items: WordsListItem[];
}

export interface WordsListItem {
  word: string;
  audioUrl: string;
  description: string;
}

@Component({
  selector: 'ehh-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss'],
  standalone: false,
})
export class WordsListComponent {
  @Input() list: WordsList;

  constructor() {}
}
