import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { List } from '../list';
import { ITodoService } from '../i-todo.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/appStore.interface';
import { listsActionTypes } from '../store/constants/iTodo.constans';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnChanges {
  @Input() lists: List[];
  @Input() selectedList: List;
  @Output() chooseList: EventEmitter<List> = new EventEmitter();

  newList: List = new List;
  // newList = '';
  search: string = '';
  searchLists: List[] = this.lists;

  constructor(
    private iTodoService: ITodoService,
    private store: Store<AppStore>
  ) { };

  ngOnChanges() {
    this.getSearchLists()
  }
  getSearchLists(): void {
    // console.log(this.search);
    if (this.search.trim()) {
      // console.log('123');
      this.searchLists = this.lists.filter((list: List) => list.name.includes(this.search.trim()))
    } else { this.searchLists = [...this.lists]; }
  }

  chooseLIST(list): void {
    // console.log('------chooseList()-------', list);
    this.chooseList.emit(list);
  }
  addList() {
    if (this.newList.name && this.newList.name.trim()) {
      this.iTodoService.addList(this.newList)
        .subscribe((payload) => {
          this.store.dispatch({
            type: listsActionTypes.ADD,
            payload
          });
          this.newList.name = '';
          this.store.dispatch({
            type: listsActionTypes.CHOOSE,
            payload: payload,
          });
        });
    }
  }
}
