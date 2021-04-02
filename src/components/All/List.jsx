import React from "react";

class List extends React.Component {
    state = {
        id: null,
        text: this.props.text
    }

    editStateText = (id, newText) => {
        this.setState({
            id: id,
            text: newText
        })
    }

    render() {
        return (
            <li>
                <input onChange={ () => {
                    if (this.props.checked) {
                        this.props.activeTodo(this.props.id)
                    } else {
                        this.props.completeTodo(this.props.id)
                    }
                } }
                       checked={this.props.checked ? this.props.checked : ''}
                       type="checkbox"/>

                {!this.props.editMode &&
                <span onDoubleClick={() => {
                    this.props.activateEditMode(this.props.id)
                }}>{this.state.text}</span>}

                {this.props.editMode &&
                <input autoFocus={true}
                       onBlur={() => {
                           this.props.deactivateEditMode(this.props.id);
                           this.props.editActivatedText(this.state.id, this.state.text);
                       }}
                       value={this.state.text}
                       onChange={(event => {
                           this.editStateText(this.props.id, event.target.value)
                       })}/>}
            </li>
        )
    }
}


export default List;