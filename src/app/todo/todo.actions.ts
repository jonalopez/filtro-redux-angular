
import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo'; // Permite agregar todos
export const TOGGLE_TODO = '[TODO] Toggle todo'; // Estado de la tarea checked
export const EDITAR_TODO = '[TODO] Editar todo'; // Editar texto de la tarea
export const ELIMINAR_TODO = '[TODO] Eliminar todo'; // Eliminar tarea
export const MARCAR_TODOS_TODO = '[TODO] Marcar todos todo'; // Eliminar tarea
export const LIMPIAR_COMPLETADOS = '[TODO] Limpiar completados'; // Limpiar completados

// Clase que permite crear acciones de este tipo
export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    // Necesito por fuerza la tarea que quiero hacer, se declara en el constructor
    constructor( public texto: string ) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    // Necesito por fuerza la tarea que quiero hacer, se declara en el constructor
    constructor( public id: number ) {}
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    // Necesito por fuerza la tarea que quiero hacer, se declara en el constructor
    constructor( public id: number, public texto: string ) {}
}

export class EliminarTodoAction implements Action {
    readonly type = ELIMINAR_TODO;
    // Necesito por fuerza la tarea que quiero hacer, se declara en el constructor
    constructor( public id: number ) {}
}

export class MarcarTodosTodoAction implements Action {
    readonly type = MARCAR_TODOS_TODO;
    // Necesito por fuerza la tarea que quiero hacer, se declara en el constructor
    constructor( public completado: boolean ) {}
}

export class LimpiarCompletadosTodosTodoAction implements Action {
    readonly type = LIMPIAR_COMPLETADOS;
}

// Tipo de acciones validas para el reducer, se debe poner Action al final de los nombres para saber que son de ese tipo.
export type Acciones = AgregarTodoAction |
                       ToggleTodoAction |
                       EditarTodoAction |
                       MarcarTodosTodoAction |
                       EliminarTodoAction |
                       LimpiarCompletadosTodosTodoAction;
