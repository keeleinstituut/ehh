import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedbackComponent } from './containers/feedback/feedback.component';
import { ContainersFacadeService } from './containers/containers.facade.service';
import { Subscription } from 'rxjs';
import { StatesService } from './services/states/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'eki-pron-game';
  menuOpened = false;
  showMenu = true;
  private subscription$: Subscription;

  constructor(
    private facade: ContainersFacadeService,
    private states: StatesService
  ) {}

  ngOnInit(): void {
    this.subscription$ = this.states.question
      .subscribe((question) => {
        this.showMenu = !!!question;
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  toggleMenu(value: boolean): void {
    this.menuOpened = value;
  }

  openModal(): void {
    this.facade.openModal(FeedbackComponent);
  }
}
