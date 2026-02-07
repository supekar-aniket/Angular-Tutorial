import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T20Pipes } from './t20-pipes';

describe('T20Pipes', () => {
  let component: T20Pipes;
  let fixture: ComponentFixture<T20Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T20Pipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T20Pipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
