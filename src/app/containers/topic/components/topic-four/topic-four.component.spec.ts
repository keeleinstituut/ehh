import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFourComponent } from './topic-four.component';

describe('TopicFourComponent', () => {
  let component: TopicThreeComponent;
  let fixture: ComponentFixture<TopicThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
