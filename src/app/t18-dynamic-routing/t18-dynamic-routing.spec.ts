import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T18DynamicRouting } from './t18-dynamic-routing';

describe('T18DynamicRouting', () => {
  let component: T18DynamicRouting;
  let fixture: ComponentFixture<T18DynamicRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T18DynamicRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T18DynamicRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
