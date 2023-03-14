import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasIndexComponent } from './idiomas-index.component';

describe('IdiomasIndexComponent', () => {
  let component: IdiomasIndexComponent;
  let fixture: ComponentFixture<IdiomasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
