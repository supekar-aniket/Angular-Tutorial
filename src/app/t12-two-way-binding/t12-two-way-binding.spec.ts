import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T12TwoWayBinding } from './t12-two-way-binding';

describe('T12TwoWayBinding', () => {
  let component: T12TwoWayBinding;
  let fixture: ComponentFixture<T12TwoWayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T12TwoWayBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T12TwoWayBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
