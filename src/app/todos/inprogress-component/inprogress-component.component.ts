import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-inprogress-component',
  templateUrl: './inprogress-component.component.html',
  styleUrls: ['./inprogress-component.component.scss'],
})
export class InprogressComponentComponent {
  @Input() todos: Todo[];
  @Input() inProgress: Todo[];
  @Input() doneMain: Todo[];
  @Output() transferDone = new EventEmitter<number>();
  @Output() transferLeft = new EventEmitter<number>()
  transferTodoDone(index: number): void {
    this.transferDone.emit(index);
  }
  transferToLeft(index:number):void {
    this.transferLeft.emit(index)
  }
}
