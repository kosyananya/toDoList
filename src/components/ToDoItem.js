import React from "react";

function ToDoItem({item, remove, edit}) {

    return (
        <div style={{margin: '10px auto', border: '1px solid', display: 'flex', width: 400, justifyContent: "space-between", paddingLeft: 10}}>
            <input type='checkbox' checked={item.done}  onChange={() => edit(item.id)}/>
            <p style={{textDecoration: item.done ? "line-through" : ""}}>{item.text}</p>
            <button onClick={() => remove(item.id)} style={{border: 0, padding: '0 10px'}}>X</button>
        </div>
    )
}
export default ToDoItem