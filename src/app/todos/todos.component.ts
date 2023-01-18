import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
  @Input() inProgress: Todo[] = [];
  @Input() doneMain: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() transferFromTodo = new EventEmitter<number>();
  @Output() transferDone = new EventEmitter<number>();
  @Output() transferToTodo = new EventEmitter<number>();
  @Output() fromDoneLeft = new EventEmitter<number>();

  addDeleteHandler(index: number): void {
    this.delete.emit(index);
  }
  transferTodo(index: number): void {
    this.transferFromTodo.emit(index);
  }
  transferTodoDone(index: number): void {
    this.transferDone.emit(index);
  }
  todoProgressLeft(index: number): void {
    this.transferToTodo.emit(index);
  }
  todoDoneLeft(index: number): void {
    this.fromDoneLeft.emit(index);
  }
}
