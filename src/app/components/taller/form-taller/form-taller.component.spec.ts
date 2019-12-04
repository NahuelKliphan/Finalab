import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTallerComponent } from './form-taller.component';

describe('FormTallerComponent', () => {
  let component: FormTallerComponent;
  let fixture: ComponentFixture<FormTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
