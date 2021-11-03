import React from "react";
import { toDoItems } from "../mock/toDoItems";
import ToDoItem from "./ToDoItem";


function List() {
    return(
        <div>
            {toDoItems.map((toDoItem) => <ToDoItem key = {toDoItem.id} item = {toDoItem}/>) }
        </div>
    )
}
export default List
