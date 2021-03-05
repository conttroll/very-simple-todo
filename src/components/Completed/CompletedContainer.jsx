import React from 'react';
import {connect} from "react-redux";
import Completed from "./Completed";

class CompletedContainer extends React.Component {
    render() {
        return <Completed { ...this.props } />
    }
}

const mapStateToProps = (state) => ({
    completedTodos: state.allTodos.todos,
    text: state.toDo.text
})

export default connect(mapStateToProps, {})(CompletedContainer);