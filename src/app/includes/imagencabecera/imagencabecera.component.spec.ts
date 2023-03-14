import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagencabeceraComponent } from './imagencabecera.component';

describe('ImagencabeceraComponent', () => {
  let component: ImagencabeceraComponent;
  let fixture: ComponentFixture<ImagencabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagencabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagencabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
