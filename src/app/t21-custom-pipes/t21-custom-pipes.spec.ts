import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T21CustomPipes } from './t21-custom-pipes';

describe('T21CustomPipes', () => {
  let component: T21CustomPipes;
  let fixture: ComponentFixture<T21CustomPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T21CustomPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T21CustomPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
