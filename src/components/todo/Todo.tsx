import React, { useMemo, useReducer, useState } from "react"
import TodoList from "./TodoList"
import { TodoInput } from "./TodoInput";
import { StateProps } from "./TodoTypes";
import TotalCount from "./TotalCount";
import { todoReducer } from "../../store/useReducer";


const initialState: StateProps = {
    list: []
  }

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const list = state.list;

    const addItem = (text: string) => {
        if (text) {
            const newTodo = {title: text, id: self.crypto.randomUUID(), isCompleted: false}
            dispatch({type: 'ADD_TODO', payload: newTodo});
        }
    }
    const deleteItem = (index: number) => {
        dispatch({type: 'DELETE_TODO', payload: {index}})
    }
    const updateItem = (index: number, key: string, value: any) => {
        dispatch({type: 'UPDATE_TODO', payload: {index, key, value}})
    }
    const totalCount = list.length;
    const totalCompletedCount = useMemo(
      (): any => {
        return (list.filter((item: any) => item?.isCompleted === true)).length
      },[updateItem])


    return (
        <>
            <TotalCount totalCount={totalCount} totalCompletedCount={totalCompletedCount}></TotalCount>
            <TodoInput addItem={addItem}></TodoInput>
            <TodoList list={list} updateItem={updateItem} deleteItem={deleteItem}></TodoList>
        </>
    )
}

export default React.memo(Todo);