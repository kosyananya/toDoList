import React from "react";

function ToDoItem({item}) {
    return (
        <div>
            <p>{item.text}</p>
        </div>
    )
}
export default ToDoItem