import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCartaComponent } from './contacto-carta.component';

describe('ContactoCartaComponent', () => {
  let component: ContactoCartaComponent;
  let fixture: ComponentFixture<ContactoCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
