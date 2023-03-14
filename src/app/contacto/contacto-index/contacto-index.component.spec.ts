import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoIndexComponent } from './contacto-index.component';

describe('ContactoIndexComponent', () => {
  let component: ContactoIndexComponent;
  let fixture: ComponentFixture<ContactoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
