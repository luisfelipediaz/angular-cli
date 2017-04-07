import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCarritoComprasMiniComponent } from './listas-carrito-compras-mini.component';

describe('ListasCarritoComprasMiniComponent', () => {
  let component: ListasCarritoComprasMiniComponent;
  let fixture: ComponentFixture<ListasCarritoComprasMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasCarritoComprasMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasCarritoComprasMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
