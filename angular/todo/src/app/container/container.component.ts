import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  todos: Todo[];
  title = 'Todo list';

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe((todos) => this.todos = todos);
  }

  postTODO(item: Todo) {
    this.todoService.postTodo(item)
      .subscribe((resp) => this.todos.push(resp));
  }

  changeCheckTODO(item: Todo) {
    this.todoService.changeCheck(item)
      .subscribe((resp: Todo) => {
        const todoId = this.todos.findIndex((item: Todo) => item.id === resp.id);
        this.todos[todoId] = resp;
      });
  }

  delTodos(): void {
    console.log('--------delTodos----------');
    const todos: Todo[] = this.todos.filter((todo) => todo.isChecked === true);
    todos.map(item => this.delTodo(item.id));
  }

  delTodo(id): void {
    this.todoService.delTodo(id)
      .subscribe(resp => {
        console.log(resp);
        this.getTodos();
      });
  }
}
