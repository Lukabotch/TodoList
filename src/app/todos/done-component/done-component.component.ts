import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-done-component',
  templateUrl: './done-component.component.html',
  styleUrls: ['./done-component.component.scss'],
})
export class DoneComponentComponent {
  @Input() inProgress: Todo[];
  @Input() doneMain: Todo[];
  @Output() todoDoneLeft = new EventEmitter<number>();

  fromDoneLeft(index: number) {
    this.todoDoneLeft.emit(index)
  }
}
