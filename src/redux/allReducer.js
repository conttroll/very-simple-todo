const ADD_TODO = 'ADD_TODO';
const COMPLETE = 'COMPLETE';
const ACTIVE = 'ACTIVE';
const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
const DEACTIVATE_EDIT_MODE = 'DEACTIVATE_EDIT_MODE';
const EDIT_ACTIVATED_TEXT = 'EDIT_ACTIVATED_TEXT';

const initialState = {
    todos: [
        {id: 1, text: 'first', completed: false, editMode: false},
        {id: 2, text: 'second', completed: false, editMode: false},
    ]
}

const allReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            if (action.newTodo !== '') {
                return {
                    ...state, todos: [ ...state.todos, {id: 3, text: action.newTodo, completed: false} ]
                }
            }
        }
        case COMPLETE: {
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === action.id) {
                        return { ...elem, completed: true }
                    }
                    return elem;
                })
            }
        }
        case ACTIVE: {
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === action.id) {
                        return { ...elem, completed: false }
                    }
                    return elem;
                })
            }
        }
        case DEACTIVATE_EDIT_MODE:
            return {
                ...state,
                todos: state.todos.map(elem => {
                    return true ? { ...elem, editMode: false } : elem;
                })
            }
        case ACTIVATE_EDIT_MODE:
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === action.id) {
                        return { ...elem, editMode: true }
                    }
                    return elem;
                })
            }
        case EDIT_ACTIVATED_TEXT:
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === action.id) {
                        return { ...elem, text: action.newText }
                    }
                    return elem;
                })
            }
        default:
            return state
    }
}

export const activateEditMode = (id) => ({ type: ACTIVATE_EDIT_MODE, id });
export const deactivateEditMode = (id) => ({ type: DEACTIVATE_EDIT_MODE, id });
export const addTodo = (newTodo) => ({ type: ADD_TODO, newTodo });
export const completeTodo = (id) => ({type: COMPLETE, id});
export const activeTodo = (id) => ({type: ACTIVE, id});
export const editActivatedText = (id, newText) => ({type: EDIT_ACTIVATED_TEXT, id, newText});

export default allReducer;