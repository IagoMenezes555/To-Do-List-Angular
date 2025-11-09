import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  @Output() itemEvent = new EventEmitter<Item>();
  taskName: string = '';

  newTask() {
    const generatorId = Math.floor(Math.random() * 1000);
    const task: Item = { id: generatorId, title: this.taskName, done: false };
    this.itemEvent.emit(task);
  }
}
