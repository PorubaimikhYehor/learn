import { List } from '../../list';
import { Todo } from '../../todo';

export interface TodoList {
  lists: List[];
  todos: Todo[];
  selectedList: List;
}
