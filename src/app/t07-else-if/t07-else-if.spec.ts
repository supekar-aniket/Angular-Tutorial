import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T07ElseIf } from './t07-else-if';

describe('T07ElseIf', () => {
  let component: T07ElseIf;
  let fixture: ComponentFixture<T07ElseIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T07ElseIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T07ElseIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
