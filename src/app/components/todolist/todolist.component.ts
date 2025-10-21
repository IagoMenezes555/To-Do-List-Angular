import { Component } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
  items: Item[] = [
    { id: 1, title: 'Título 1', done: false },
    { id: 2, title: 'Título 2', done: false }
  ];
}
