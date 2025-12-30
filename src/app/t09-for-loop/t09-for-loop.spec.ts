import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T09ForLoop } from './t09-for-loop';

describe('T09ForLoop', () => {
  let component: T09ForLoop;
  let fixture: ComponentFixture<T09ForLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T09ForLoop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T09ForLoop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
