import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuid } from 'uuid';

import { getPosts } from "features/posts/postsSlice";

const Posts = () => {
    const dispatch = useDispatch();
    // const todos = useSelector(({todo}) => todo);

    return (
        <div className="user">
            <button onClick={() => dispatch(getPosts())}>
                Get posts
            </button>
        </div>
    )
};

export default Posts;