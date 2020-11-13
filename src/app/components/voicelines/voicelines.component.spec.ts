import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicelinesComponent } from './voicelines.component';

describe('VoicelinesComponent', () => {
  let component: VoicelinesComponent;
  let fixture: ComponentFixture<VoicelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
