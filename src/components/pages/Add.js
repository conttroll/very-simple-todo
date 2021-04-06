import React from 'react';
import axios from "axios";

class AddTodo extends React.Component {
    state = ({
        newTodo: ''
    })

    onInputChange = (e) => {
        this.setState({
            newTodo: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3002/todos', {title: this.state.newTodo, completed: false});
        this.props.loadTodos();
        this.state.newTodo = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={(event => this.onSubmit(event))}>
                    <input
                        type="text"
                        className="input-group-text m-auto w-100"
                        placeholder="Add todo"
                        value={this.state.newTodo}
                        onChange={(e) => this.onInputChange(e)}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo;