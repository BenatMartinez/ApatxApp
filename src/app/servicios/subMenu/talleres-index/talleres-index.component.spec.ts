import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresIndexComponent } from './talleres-index.component';

describe('TalleresIndexComponent', () => {
  let component: TalleresIndexComponent;
  let fixture: ComponentFixture<TalleresIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalleresIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalleresIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
