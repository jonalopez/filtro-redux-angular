import { Component, OnInit } from '@angular/core';
import { MarcarTodosTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  marcarTodos() {
    this.completado = !this.completado;
    console.log(this.completado);

    const accion = new MarcarTodosTodoAction( this.completado );
    this.store.dispatch( accion );
  }

}
