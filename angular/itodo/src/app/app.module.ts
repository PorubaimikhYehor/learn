import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ITodoReducer } from './store/reducers/iTodo.reducer';
import { ListsComponent } from './lists/lists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { TodosComponent } from './todos/todos.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TodosComponent,
    ItemTodoComponent
  ],
  imports: [
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ todoList: ITodoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
