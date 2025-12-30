import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T11Effects } from './t11-effects';

describe('T11Effects', () => {
  let component: T11Effects;
  let fixture: ComponentFixture<T11Effects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T11Effects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T11Effects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
