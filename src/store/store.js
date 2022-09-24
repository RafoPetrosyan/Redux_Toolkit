import { configureStore } from "@reduxjs/toolkit";

import userSlice from "features/user/userSlice";
import todoSlice from "features/todo/todoSlice";
import postsSlice from "features/posts/postsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        posts: postsSlice,
    },
});
