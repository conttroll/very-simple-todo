import React from 'react';
import {connect} from "react-redux";
import All from "./All";
import {withRouter} from "react-router-dom";
import {activeTodo, completeTodo} from "../../redux/allReducer";

class AllContainer extends React.Component {

    render() {
        return <All { ...this.props } activeTodo={this.props.activeTodo} completeTodo={this.props.completeTodo} />
    }
}

const mapStateToProps = (state) => ({
    todos: state.allTodos.todos,
    text: state.toDo.text
})

const WithAllContainer =  withRouter(AllContainer);

export default connect(mapStateToProps, {activeTodo, completeTodo})(WithAllContainer);