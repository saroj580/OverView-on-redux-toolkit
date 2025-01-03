//nanoid is used to create a unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text : "hello world"
    },]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { //it takes arguments as state and action always
            const todo = {
                id: nanoid(),
                text : action.payload   //payload is the object from where you can extract id, text and so on 
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
            );
        }
    }//reducers takes as properties and function whereas addTodo is the properties and another is the function
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer