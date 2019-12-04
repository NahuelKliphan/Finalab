import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTallerComponent } from './lista-taller.component';

describe('ListaTallerComponent', () => {
  let component: ListaTallerComponent;
  let fixture: ComponentFixture<ListaTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
