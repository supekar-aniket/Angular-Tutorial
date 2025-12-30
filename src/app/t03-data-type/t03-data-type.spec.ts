import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T03DataType } from './t03-data-type';

describe('T03DataType', () => {
  let component: T03DataType;
  let fixture: ComponentFixture<T03DataType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T03DataType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T03DataType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
