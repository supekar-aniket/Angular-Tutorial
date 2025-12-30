import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T10Signals } from './t10-signals';

describe('T10Signals', () => {
  let component: T10Signals;
  let fixture: ComponentFixture<T10Signals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T10Signals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T10Signals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
