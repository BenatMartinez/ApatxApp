import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoIndexComponent } from './psico-index.component';

describe('PsicoIndexComponent', () => {
  let component: PsicoIndexComponent;
  let fixture: ComponentFixture<PsicoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
