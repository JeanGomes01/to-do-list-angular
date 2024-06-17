import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public tasklist: Array<TaskList> = [];

  constructor() {}

  ngDoCheck(): void {
    this.tasklist.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }
  public setEmitTaskList(event: string) {
    this.tasklist.push({ task: event, checked: false });
  }
  public deleteItemTaskList(event: number) {
    this.tasklist.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo ?');

    if (confirm) {
      this.tasklist = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja Deletar ?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
