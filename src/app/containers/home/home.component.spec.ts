import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { EtLexApiService } from '../../services/api/et-lex-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ContainersFacadeService } from '../containers.facade.service';
import { StatesService } from '../../services/states/states.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule],
      providers: [EtLexApiService, ContainersFacadeService, StatesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
