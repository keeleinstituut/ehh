import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragOptionComponent } from './drag-option.component';

describe('DragOptionComponent', () => {
  let component: DragOptionComponent;
  let fixture: ComponentFixture<DragOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
