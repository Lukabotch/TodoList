import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];
  inProgress: Todo[] = [];
  doneMain: Todo[] = [];
  addTodoHandler(task: Todo) {
    console.log(task.content);
    this.todos.push({
      content:
        task.content[0].toUpperCase() + task.content.substr(1).toLowerCase(),
      difficulty: task.difficulty,
    });
  }
  addDeleteHandler(index: number): void {
    this.todos = this.todos.filter((v, i) => {
      return index !== i;
    });
  }
  transferTodo(id: number) {
    this.todos.filter((v, i) => (i == id ? this.inProgress.push(v) : ''));
    this.todos = this.todos.filter((v, i) => id !== i);
  }
  transferTodoDone(id: number) {
    this.inProgress.filter((v, i) => (i == id ? this.doneMain.push(v) : ''));
    this.inProgress = this.inProgress.filter((v, i) => id !== i);
  }
  transferToTodo(id: number) {
    this.inProgress.filter((v, i) => (id == i ? this.todos.push(v) : ''));
    this.inProgress = this.inProgress.filter((v, i) => id !== i);
  }
  todoDoneLeft(id: number) {
    this.doneMain.filter((v, i) => (id == i ? this.inProgress.push(v) : ''));
    this.doneMain = this.doneMain.filter((v, i) => i !== id);
  }
}
