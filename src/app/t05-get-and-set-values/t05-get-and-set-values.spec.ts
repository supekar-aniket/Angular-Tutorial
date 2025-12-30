import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T05GetAndSetValues } from './t05-get-and-set-values';

describe('T05GetAndSetValues', () => {
  let component: T05GetAndSetValues;
  let fixture: ComponentFixture<T05GetAndSetValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T05GetAndSetValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T05GetAndSetValues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
