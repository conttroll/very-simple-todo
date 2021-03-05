const WRITE_NEW_TEXT = 'WRITE_NEW_TEXT';

const initialState = {
    text: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_NEW_TEXT: {
            return { ...state, text: action.newText }
        }
        default:
            return state;
    }
}

export const writeNewText = (newText) => ({type: WRITE_NEW_TEXT, newText});

export default todoReducer;