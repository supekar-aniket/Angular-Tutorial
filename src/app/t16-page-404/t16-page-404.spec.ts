import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T16Page404 } from './t16-page-404';

describe('T16Page404', () => {
  let component: T16Page404;
  let fixture: ComponentFixture<T16Page404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T16Page404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T16Page404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
