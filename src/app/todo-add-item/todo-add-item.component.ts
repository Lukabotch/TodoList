import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.scss'],
})
export class TodoAddItemComponent implements OnInit {
  inputTodo: string = '';
  todoDifficulty: string = 'Easy';
  @Output() todoAdd = new EventEmitter<Todo>();
  addTodo() {
    this.todoAdd.emit({
      content: this.inputTodo,
      difficulty: this.todoDifficulty,
    });
    this.inputTodo = '';
  }

  ngOnInit(): void {}
}
