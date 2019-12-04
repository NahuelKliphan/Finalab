import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCamionGeneralComponent } from './form-camion-general.component';

describe('FormCamionGeneralComponent', () => {
  let component: FormCamionGeneralComponent;
  let fixture: ComponentFixture<FormCamionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCamionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCamionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
