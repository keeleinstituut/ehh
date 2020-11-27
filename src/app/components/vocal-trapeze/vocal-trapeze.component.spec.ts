import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocalTrapezeComponent } from './vocal-trapeze.component';

describe('VocalTrapezeComponent', () => {
  let component: VocalTrapezeComponent;
  let fixture: ComponentFixture<VocalTrapezeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocalTrapezeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocalTrapezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
