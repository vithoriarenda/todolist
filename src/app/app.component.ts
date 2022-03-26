import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public items = [
    'Tarefa número 1',
    'Tarefa número 2',
    'Tarefa número 3',
    'Tarefa número 4',
  ];
  public tarefa = '';

  addTarefa() {
    this.items.push(this.tarefa);
  }

  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
