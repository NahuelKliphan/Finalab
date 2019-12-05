import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCamionVolcadorComponent } from './form-camion-volcador.component';

describe('FormCamionVolcadorComponent', () => {
  let component: FormCamionVolcadorComponent;
  let fixture: ComponentFixture<FormCamionVolcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCamionVolcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCamionVolcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
