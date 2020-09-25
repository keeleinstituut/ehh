import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsBackButtonComponent } from './topics-back-button.component';

describe('TopicsBackButtonComponent', () => {
  let component: TopicsBackButtonComponent;
  let fixture: ComponentFixture<TopicsBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsBackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
