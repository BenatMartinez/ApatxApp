import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasCartaComponent } from './caracteristicas-carta.component';

describe('CaracteristicasCartaComponent', () => {
  let component: CaracteristicasCartaComponent;
  let fixture: ComponentFixture<CaracteristicasCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
