import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoIndexComponent } from './apoyo-index.component';

describe('ApoyoIndexComponent', () => {
  let component: ApoyoIndexComponent;
  let fixture: ComponentFixture<ApoyoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoyoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
