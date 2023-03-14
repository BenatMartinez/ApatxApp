import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCartaComponent } from './home-carta.component';

describe('HomeCartaComponent', () => {
  let component: HomeCartaComponent;
  let fixture: ComponentFixture<HomeCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
