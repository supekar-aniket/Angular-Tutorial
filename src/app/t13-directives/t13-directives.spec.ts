import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T13Directives } from './t13-directives';

describe('T13Directives', () => {
  let component: T13Directives;
  let fixture: ComponentFixture<T13Directives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T13Directives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T13Directives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
