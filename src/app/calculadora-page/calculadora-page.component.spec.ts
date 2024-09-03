import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPageComponent } from './calculadora-page.component';

describe('CalculadoraPageComponent', () => {
  let component: CalculadoraPageComponent;
  let fixture: ComponentFixture<CalculadoraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
