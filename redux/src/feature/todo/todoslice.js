import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updatetodo: (state, action) => {
            return state.map((todo) => {
                 if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        item: action.payload.text
                    }
                 }
                 return todo
            })
        },
    }
})

export const {addtodo, removetodo, updatetodo} = todoSlice.actions
export default todoSlice.reducer
