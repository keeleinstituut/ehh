import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioImageListThreeComponent } from './audio-image-list-three.component';

describe('AudioImageListThreeComponent', () => {
  let component: AudioImageListThreeComponent;
  let fixture: ComponentFixture<AudioImageListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioImageListThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioImageListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
