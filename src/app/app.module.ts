import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { TodoAddItemComponent } from './todo-add-item/todo-add-item.component';
import { ToDoComponentComponent } from './todos/to-do-component/to-do-component.component';
import { InprogressComponentComponent } from './todos/inprogress-component/inprogress-component.component';
import { DoneComponentComponent } from './todos/done-component/done-component.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoAddItemComponent, ToDoComponentComponent, InprogressComponentComponent, DoneComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
