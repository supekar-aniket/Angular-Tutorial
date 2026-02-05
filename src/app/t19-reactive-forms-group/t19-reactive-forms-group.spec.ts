import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T19ReactiveFormsGroup } from './t19-reactive-forms-group';

describe('T19ReactiveFormsGroup', () => {
  let component: T19ReactiveFormsGroup;
  let fixture: ComponentFixture<T19ReactiveFormsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T19ReactiveFormsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T19ReactiveFormsGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
