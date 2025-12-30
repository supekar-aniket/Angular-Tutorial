import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T14Routing } from './t14-routing';

describe('T14Routing', () => {
  let component: T14Routing;
  let fixture: ComponentFixture<T14Routing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T14Routing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T14Routing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
