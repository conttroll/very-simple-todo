import React from 'react';
import {connect} from "react-redux";
import All from "./All";
import {withRouter} from "react-router-dom";
import {
    activateEditMode,
    activeTodo,
    completeTodo,
    deactivateEditMode,
    editActivatedText
} from "../../redux/allReducer";
import {writeNewText} from "../../redux/todoReducer";

class AllContainer extends React.Component {

    render() {
        return <All { ...this.props }
                    activateEditMode={this.props.activateEditMode}
                    activeTodo={this.props.activeTodo}
                    completeTodo={this.props.completeTodo}
                    deactivateEditMode={this.props.deactivateEditMode}
                    editActivatedText={this.props.editActivatedText} />
    }
}

const mapStateToProps = (state) => ({
    todos: state.allTodos.todos
})

const WithAllContainer =  withRouter(AllContainer);

export default connect(mapStateToProps, {activeTodo, completeTodo, activateEditMode, deactivateEditMode, writeNewText, editActivatedText})(WithAllContainer);