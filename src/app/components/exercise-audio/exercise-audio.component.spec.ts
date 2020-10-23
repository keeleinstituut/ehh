import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAudioComponent } from './exercise-audio.component';

describe('ExerciseAudioComponent', () => {
  let component: ExerciseAudioComponent;
  let fixture: ComponentFixture<ExerciseAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
