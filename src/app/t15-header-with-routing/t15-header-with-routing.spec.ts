import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T15HeaderWithRouting } from './t15-header-with-routing';

describe('T15HeaderWithRouting', () => {
  let component: T15HeaderWithRouting;
  let fixture: ComponentFixture<T15HeaderWithRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T15HeaderWithRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T15HeaderWithRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
