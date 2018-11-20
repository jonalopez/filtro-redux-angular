import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos; // Variable para dejar marcado el filtro al que le hice click

  // Recordar importar siempre el store
  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {

        this.contarPendientes( state.todos );
        // Se recibe el state
          this.filtroActual = state.filtro;
    });
  }

  // La variable nuevoFiltro viene del html y se define el tipo, en este caso son los filtros validos pero podria
  // ser string o number.
  listaFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {

    const accion = new fromFiltro.FiltroTodoAction( nuevoFiltro ); // Esta definicion siempre se hace, declarar el objeto que viene del .ts
    this.store.dispatch( accion ); // Ademas de crear el dispatch y se manda la accion
  }

  contarPendientes( todos: Todo[] ) {

    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  limpiarCompletados() {

    const accion = new fromTodo.LimpiarCompletadosTodosTodoAction(); // Esta definicion siempre se hace,
                                                                        // declarar el objeto que viene del .ts
    this.store.dispatch( accion ); // Ademas de crear el dispatch y se manda la accion

  }


}
