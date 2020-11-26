import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationButtonComponent } from './illustration-button.component';

describe('IllustrationButtonComponent', () => {
  let component: IllustrationButtonComponent;
  let fixture: ComponentFixture<IllustrationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
