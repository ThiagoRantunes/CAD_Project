import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlerPageComponent } from './controler-page.component';

describe('ControlerPageComponent', () => {
  let component: ControlerPageComponent;
  let fixture: ComponentFixture<ControlerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
