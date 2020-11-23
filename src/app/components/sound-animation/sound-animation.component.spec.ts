import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundAnimationComponent } from './sound-animation.component';

describe('SoundAnimationComponent', () => {
  let component: SoundAnimationComponent;
  let fixture: ComponentFixture<SoundAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
