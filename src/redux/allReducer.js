const ADD_TODO = 'ADD_TODO';
const COMPLETE = 'COMPLETE';
const ACTIVE = 'ACTIVE';

const initialState = {
    todos: [
        {id: 1, text: 'efsfse', completed: false},
        {id: 2, text: 'wdadwd', completed: false},
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
        default:
            return state
    }
}

export const addTodo = (newTodo) => ({ type: ADD_TODO, newTodo });
export const completeTodo = (id) => ({type: COMPLETE, id});
export const activeTodo = (id) => ({type: ACTIVE, id});

export default allReducer;