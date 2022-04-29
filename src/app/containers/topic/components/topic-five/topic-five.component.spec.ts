import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFiveComponent } from './topic-five.component';

describe('TopicFiveComponent', () => {
  let component: TopicFiveComponent;
  let fixture: ComponentFixture<TopicFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
