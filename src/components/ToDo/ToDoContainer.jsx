import React from 'react';
import ToDo from "./ToDo";
import {writeNewText} from "../../redux/todoReducer";
import {connect} from "react-redux";
import {addTodo} from "../../redux/allReducer";

class ToDoContainer extends React.Component {
    render() {
        return <ToDo {...this.props} writeNewText={this.props.writeNewText} addTodo={this.props.addTodo} />;
    }
}

const mapDispatchToProps = {
    writeNewText,
    addTodo
}

const mapStateToProps = (state) => ({
    text: state.toDo.text
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);