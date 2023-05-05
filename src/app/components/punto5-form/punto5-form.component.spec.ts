import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto5FormComponent } from './punto5-form.component';

describe('Punto5FormComponent', () => {
  let component: Punto5FormComponent;
  let fixture: ComponentFixture<Punto5FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto5FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
