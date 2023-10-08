import { createSlice } from "@reduxjs/toolkit";

interface DemoSliceType {
    appName: string;
}


const initialState: DemoSliceType = {
    appName: 'My Vite App'
}

const demoSlice = createSlice({
    name: "demoSlice",
    initialState,
    reducers: {
        changeAppName: (state, {payload}) => {
            state.appName = payload;
        }
    }
});

export const {
    changeAppName,
} = demoSlice.actions;

export default demoSlice.reducer;