import { createAsyncThunk } from "@reduxjs/toolkit";
import { PerfumeItem } from "./types";
import axios from "axios";

export const fetchPerfumes = createAsyncThunk(
    "perfume/fetchPerfumesStatus",
    async (params: Record<string, string>) => {
      const { sortBy, order, search, category, currentPage } = params;
      const { data } = await axios.get<PerfumeItem[]>(
        `https://6413a04bc469cff60d673b36.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
  
      return data as PerfumeItem[];
    }
  );