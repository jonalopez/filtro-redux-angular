
// Aqui esta toda la configuracion del reducer

import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

// Se importa todo el reducer de cada uno de los elementos que manejan reducers.
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';

// Se importan las acciones del filtro.
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos; // Se asgina el tipo especifico porque ya lo definimos en el action de los filtros, 
                                              // se podria definir el tipo exacto como string o int.
}

// Conbinacion de todos los reducers que usa la aplicacion
// ActionReducerMap es de tipo generico AppState
export const appReducers: ActionReducerMap<AppState> = {

    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroreducer // Con estos nombre queda claro de que reducer se esta hablando

};
