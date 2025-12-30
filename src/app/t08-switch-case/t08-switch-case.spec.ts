import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T08SwitchCase } from './t08-switch-case';

describe('T08SwitchCase', () => {
  let component: T08SwitchCase;
  let fixture: ComponentFixture<T08SwitchCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T08SwitchCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T08SwitchCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
