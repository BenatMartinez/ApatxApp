import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCartaComponent } from './servicios-carta.component';

describe('ServiciosCartaComponent', () => {
  let component: ServiciosCartaComponent;
  let fixture: ComponentFixture<ServiciosCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
