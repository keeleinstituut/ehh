import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSixComponent } from './topic-six.component';

describe('TopicSixComponent', () => {
  let component: TopicSixComponent;
  let fixture: ComponentFixture<TopicSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
