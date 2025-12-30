import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task01CounterApp } from './task01-counter-app';

describe('Task01CounterApp', () => {
  let component: Task01CounterApp;
  let fixture: ComponentFixture<Task01CounterApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task01CounterApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task01CounterApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
