export type PerfumeItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
  };

  export type SearchPerfumeParams = {
    sortBy: string;
    order: string; 
    search: string;
    category: string;
    currentPage: string;
  };
  
  export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
  }
  
  export  interface PizzaSliceState {
    items: PerfumeItem[];
    status: Status;
  }