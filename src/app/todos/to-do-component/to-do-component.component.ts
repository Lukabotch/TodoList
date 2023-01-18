import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.scss'],
})
export class ToDoComponentComponent {
  @Input() todos: Todo[] = [];
  @Input() inProgress: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() transferFromTodo = new EventEmitter<number>();

  deleteTodo(index: number): void {
    this.delete.emit(index);
    console.log(index);
  }
  transferTodo(index: number): void {
    this.transferFromTodo.emit(index);
  }
}
