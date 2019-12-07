import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRevisionComponent } from './lista-revision.component';

describe('ListaRevisionComponent', () => {
  let component: ListaRevisionComponent;
  let fixture: ComponentFixture<ListaRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
