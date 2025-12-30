import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T06IfElse } from './t06-if-else';

describe('T06IfElse', () => {
  let component: T06IfElse;
  let fixture: ComponentFixture<T06IfElse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T06IfElse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T06IfElse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
