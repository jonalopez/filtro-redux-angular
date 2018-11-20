import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter] Set Filtro';
export const LIMPIAR_COMPLETADOS = '[Filter] Limpiar todos';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class FiltroTodoAction implements Action {

    readonly type = SET_FILTRO;
    constructor( public filtro: filtrosValidos ) {}
}

export class LimpiarCompletadosTodosTodoAction implements Action {
    readonly type = LIMPIAR_COMPLETADOS;
    // Necesito por fuerza la tarea que quiero hacer, se declara en el constructor
    constructor( public completado: boolean ) {}
}

export type Acciones = FiltroTodoAction |  LimpiarCompletadosTodosTodoAction;
