
import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { LIMPIAR_COMPLETADOS } from './todo.actions';

const todo1 = new Todo('Caminar');
const todo2 = new Todo('Viajar');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

// Crear funcion reducer, el state se define con la constante, el action se define con acciones permitidas de todo.accion,
// importa todo de este archivo, y retorna Todo[] el cual es un modelo de los datos
export function todoReducer( state = estadoInicial,
                            action: fromTodo.Acciones ): Todo[] {

        // Siempre se usa switch para validar que accion viene desde Acciones, ademas debe tener default siempre
        switch (action.type) {
            // Siempre se retorna un nevo estado inicial, por lo tanto se debe declarar una constante que use el objeto Todo
            // y el asigne el nuevo elemento, despues en el return se devuelve el state y el todo final, los tres puntos antes
            // state se llama operador spret y con esto se clona el estado actual, mandando todos los elementos de forma independiente
            // a la creacion de un arreglo y eso es un nuevo arreglo
            case fromTodo.AGREGAR_TODO:
                const todo = new Todo(action.texto);
                return [...state, todo]; // Aqui no se puede usar push

            case fromTodo.TOGGLE_TODO:
               return state.map( todoEdit => {
                 if ( todoEdit.id === action.id ) {
                     return {
                         ...todoEdit,
                         completado: !todoEdit.completado
                     };
                 } else {
                     return todoEdit;
                 }

               });

            case fromTodo.EDITAR_TODO:
               return state.map( todoEdit => {
                 if ( todoEdit.id === action.id ) {
                     return {
                         ...todoEdit,
                         texto: action.texto // Tener en cuenta el nombre correcto de esta variable debe ser igual a la del store
                     };
                 } else {
                     return todoEdit;
                 }

               });

            case fromTodo.ELIMINAR_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id );

            case fromTodo.MARCAR_TODOS_TODO:
                return state.map( todoEdit =>  {
                    return{
                        ...todoEdit,
                        completado: action.completado
                    };
                });

            case fromTodo.LIMPIAR_COMPLETADOS:
                return state.filter( todoEdit => !todoEdit.completado );

            default:
                return state;
        }


}

