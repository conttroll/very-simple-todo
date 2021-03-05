import React from 'react';
import Active from "./Active";
import {connect} from "react-redux";

class ActiveContainer extends React.Component {
    render() {
        return <Active { ...this.props }/>
    }
}

const mapStateToProps = (state) => ({
    activeTodos: state.allTodos.todos,
})

export default connect(mapStateToProps, {})(ActiveContainer);