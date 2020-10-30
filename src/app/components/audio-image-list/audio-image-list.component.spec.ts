import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioImageListComponent } from './audio-image-list.component';

describe('AudioImageListComponent', () => {
  let component: AudioImageListComponent;
  let fixture: ComponentFixture<AudioImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioImageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
