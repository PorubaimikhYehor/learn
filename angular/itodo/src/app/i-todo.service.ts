import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ITodoService {
  private iTodoUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  getData(urlName): Observable<any> {
    // return of('123')
    return this.http.get(`${this.iTodoUrl}/${urlName}`);
  }

  changeCheck(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.iTodoUrl}/todos/${todo.id}`, { ...todo, isChecked: !todo.isChecked });
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.iTodoUrl}/todos`, todo);
  }
  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.iTodoUrl}/todos/${id}`);
  }
  addList(list: List): Observable<List> {
    return this.http.post<List>(`${this.iTodoUrl}/lists`, list);
  }
  deleteList(id: number): Observable<any> {
    return this.http.delete<any>(`${this.iTodoUrl}/lists/${id}`);
  }
}
