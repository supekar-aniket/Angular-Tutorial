import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T04Events } from './t04-events';

describe('T04Events', () => {
  let component: T04Events;
  let fixture: ComponentFixture<T04Events>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T04Events]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T04Events);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
