import { Component } from '@angular/core';
import { Item } from '../../interfaces/item';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-todolist',
  imports: [AddComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
  items: Item[] = [];

  constructor() {
  }

  received(task: Item) {
    this.items.push(task);
    const saveItems = JSON.stringify(this.items);
    localStorage.setItem('tasks', saveItems);
  }
}