import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapWriteComponent } from './gap-write.component';

describe('GapWriteComponent', () => {
  let component: GapWriteComponent;
  let fixture: ComponentFixture<GapWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GapWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GapWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
