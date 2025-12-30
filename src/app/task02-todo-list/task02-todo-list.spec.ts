import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task02TodoList } from './task02-todo-list';

describe('Task02TodoList', () => {
  let component: Task02TodoList;
  let fixture: ComponentFixture<Task02TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task02TodoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task02TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
