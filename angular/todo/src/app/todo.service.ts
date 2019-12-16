import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    console.log('-------------getTodos---------------');
    return this.http.get<Todo[]>(this.todosUrl);
  }
  postTodo(todo: Todo): Observable<any> {
    return this.http.post(this.todosUrl, todo);
  }
  changeCheck(todo: Todo): Observable<any> {
    // console.log(todo);
    todo.isChecked = !todo.isChecked;
    // console.log(todo);
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo);
  }
  delTodo(id: number): Observable<any> {
    console.log(`${this.todosUrl}/${id}`);
    return this.http.delete(`${this.todosUrl}/${id}`);
  }
}
