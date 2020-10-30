import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioButtonListComponent } from './audio-button-list.component';

describe('AudioButtonListComponent', () => {
  let component: AudioButtonListComponent;
  let fixture: ComponentFixture<AudioButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioButtonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
