import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PerfumeItem, PizzaSliceState, Status } from "./types";
import { fetchPerfumes } from "./asyncActions";


const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING, // loading, success, error
  };
  
  const perfumeSlice = createSlice({
    name: "perfume",
    initialState,
    reducers: {
      setItems: (state, action: PayloadAction<PerfumeItem[]>) => {
        state.items = action.payload;
      },
    },
  
    extraReducers: (builder) => {
      builder.addCase(fetchPerfumes.pending, (state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
  
      builder.addCase(fetchPerfumes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      });
  
      builder.addCase(fetchPerfumes.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    },
  });
  

  export const { setItems } = perfumeSlice.actions;
  
  export default perfumeSlice.reducer;
  