import React from 'react'

class ToDoHeader extends React.Component {
    // constructor(...arg) {
    //     super(arg)
    //     this.state = {

    //     }
    // }

    state = {
        toDoName: ''
    }
    change = (e) => {
        // this.state.toDoName = e.target.value
        this.setState({
          toDoName: e.target.value
        })
    }
    click = (e) => {
      alert()
    }
    render() {
        return(
            <div>
                <h2>To Do List</h2>
                <input type="text" value = {this.state.toDoName} onChange={this.change}/>
                <button type='button' onClick={() => alert(this.state.toDoName)}>Add</button>
            </div>
        )
    }
}
export default ToDoHeader