import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSelectionComponent } from './checkbox-selection.component';

describe('CheckboxSelectionComponent', () => {
  let component: CheckboxSelectionComponent;
  let fixture: ComponentFixture<CheckboxSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
