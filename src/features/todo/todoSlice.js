import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;