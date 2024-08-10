import React,{ useState } from "react"
import TodoListItem from "./TodoListItem"
import {TodoListProps} from './TodoTypes'


const TodoList = ({list, updateItem, deleteItem}: TodoListProps) => {
    const [editableTodoNumber, setEditableTodoNumber] = useState<number | null>(null);

    const updateEditEnable = (index: number | null) => {
        setEditableTodoNumber(index);
    }

    return (
        <ul className="sm:m-auto text-left p-2 sm:w-5/6 w-full sm:px-0 px-4">
            {list.length > 0 && list.map((item:any, index) => (
                <TodoListItem key={item.id} updateItem={updateItem} deleteItem={deleteItem} updateEditEnable={updateEditEnable} isEditableProp={index === editableTodoNumber} item={item} index={index}></TodoListItem>
            ))}
        </ul>
    )
}

export default React.memo(TodoList);