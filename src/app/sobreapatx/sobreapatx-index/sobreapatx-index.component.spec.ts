import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreapatxIndexComponent } from './sobreapatx-index.component';

describe('SobreapatxIndexComponent', () => {
  let component: SobreapatxIndexComponent;
  let fixture: ComponentFixture<SobreapatxIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreapatxIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreapatxIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
