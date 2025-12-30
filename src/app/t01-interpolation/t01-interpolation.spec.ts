import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T01Interpolation } from './t01-interpolation';

describe('T01Interpolation', () => {
  let component: T01Interpolation;
  let fixture: ComponentFixture<T01Interpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T01Interpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T01Interpolation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
