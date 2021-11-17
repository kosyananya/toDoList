import React from "react";
import react from "react";

class Button extends React.Component {
    render() {
        return(
            <button type="button" onClick={this.props.removeToDoSelectedItems}>remove all selected items</button>
        )
    }
}
export default Button