import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculoComponent } from './lista-vehiculo.component';

describe('ListaVehiculoComponent', () => {
  let component: ListaVehiculoComponent;
  let fixture: ComponentFixture<ListaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
