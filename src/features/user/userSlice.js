import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: '',
  lastName: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, { payload }) => {
            return {
                ...state,
                firstName: payload,
            }
        },
        setLastName: (state, { payload }) => {
            return {
                ...state,
                lastName: payload,
            }
        },
    },
});

export const { setFirstName, setLastName } = userSlice.actions;
export default userSlice.reducer;