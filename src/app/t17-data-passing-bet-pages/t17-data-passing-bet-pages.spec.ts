import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T17DataPassingBetPages } from './t17-data-passing-bet-pages';

describe('T17DataPassingBetPages', () => {
  let component: T17DataPassingBetPages;
  let fixture: ComponentFixture<T17DataPassingBetPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T17DataPassingBetPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T17DataPassingBetPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
