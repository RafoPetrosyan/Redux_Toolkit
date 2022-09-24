import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
};

export const getPosts = createAsyncThunk(
    'posts/getPosts', async (_, {rejectWithValue, dispatch}) => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(setPosts(data));
        } catch (e) {
            console.log(e)
        }
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            return {
                ...state,
                posts: payload,
            }
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fulfilled'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
    }
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;