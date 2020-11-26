import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupButtonComponent } from './checkup-button.component';

describe('CheckupButtonComponent', () => {
  let component: CheckupButtonComponent;
  let fixture: ComponentFixture<CheckupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
