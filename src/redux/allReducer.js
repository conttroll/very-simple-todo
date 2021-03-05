const ADD_TODO = 'ADD_TODO';

const initialState = {
    todos: [
        {id: 1, text: 'efsfse', completed: false},
        {id: 2, text: 'wdadwd', completed: true},
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
        default:
            return state
    }
}

export const addTodo = (newTodo) => ({ type: ADD_TODO, newTodo });

export default allReducer;