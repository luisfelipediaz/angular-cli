import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVacacionesComponent } from './tipo-vacaciones.component';

describe('TipoVacacionesComponent', () => {
  let component: TipoVacacionesComponent;
  let fixture: ComponentFixture<TipoVacacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoVacacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
