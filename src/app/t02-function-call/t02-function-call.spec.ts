import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T02FunctionCall } from './t02-function-call';

describe('T02FunctionCall', () => {
  let component: T02FunctionCall;
  let fixture: ComponentFixture<T02FunctionCall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T02FunctionCall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T02FunctionCall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
