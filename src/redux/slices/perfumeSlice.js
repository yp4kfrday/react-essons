import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPerfumes = createAsyncThunk('perfume/fetchPerfumesStatus', async (params) => {
    const {sortBy, order, search, category, currentPage} = params;
    const { data } = await axios.get(`https://6413a04bc469cff60d673b36.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data
});

const initialState = {
    items: [],
    status: 'loading' // loading, success, error
};

const perfumeSlice = createSlice({
    name: 'perfume',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers : {
        [fetchPerfumes.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchPerfumes.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchPerfumes.rejected]: (state, action) => {
            state.status = 'error';
            state.items = [];
        },
    },
});

export const { setItems } = perfumeSlice.actions;

export default perfumeSlice.reducer;