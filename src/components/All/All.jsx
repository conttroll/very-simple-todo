import React from 'react';
import List from "./List";

class All extends React.Component {
    render() {
        if (this.props.match.params.status === 'active') {
            return this.props.todos
                .map(todo => {
                    return !todo.completed ?
                        <List editMode={todo.editMode}
                              completeTodo={this.props.completeTodo}
                              id={todo.id}
                              activateEditMode={this.props.activateEditMode}
                              deactivateEditMode={this.props.deactivateEditMode}
                              text={todo.text}
                              editActivatedText={this.props.editActivatedText}
                        /> : null
                })
        } else if (this.props.match.params.status === 'completed') {
            return this.props.todos
                .map(todo => {
                    return todo.completed ?
                        <List editMode={todo.editMode}
                              activeTodo={this.props.activeTodo}
                              id={todo.id}
                              activateEditMode={this.props.activateEditMode}
                              deactivateEditMode={this.props.deactivateEditMode}
                              text={todo.text}
                              checked='checked'
                              editActivatedText={this.props.editActivatedText}
                        /> : null
                })
        } else {
            return this.props.todos
                .map(todo => {
                    return todo.completed ?
                        <List editMode={todo.editMode}
                              activeTodo={this.props.activeTodo}
                              id={todo.id}
                              activateEditMode={this.props.activateEditMode}
                              deactivateEditMode={this.props.deactivateEditMode}
                              text={todo.text}
                              checked='checked'
                              editActivatedText={this.props.editActivatedText}
                        /> :
                        <List editMode={todo.editMode}
                              completeTodo={this.props.completeTodo}
                              id={todo.id}
                              activateEditMode={this.props.activateEditMode}
                              deactivateEditMode={this.props.deactivateEditMode}
                              text={todo.text}
                              editActivatedText={this.props.editActivatedText}
                        />
                });
        }
    }
}

export default All;