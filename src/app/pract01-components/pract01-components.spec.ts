import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pract01Components } from './pract01-components';

describe('Pract01Components', () => {
  let component: Pract01Components;
  let fixture: ComponentFixture<Pract01Components>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pract01Components]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pract01Components);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
