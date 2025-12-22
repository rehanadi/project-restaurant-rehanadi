import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, Pagination, Filter } from './types';

export interface OrdersState {
  orders: Transaction[];
  pagination: Pagination;
  filter: Filter;
}

const initialState: OrdersState = {
  orders: [],
  pagination: {
    page: 1,
    limit: 5,
    total: 0,
    totalPages: 0,
  },
  filter: {
    status: 'done',
  },
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (
      state,
      action: PayloadAction<{
        orders: Transaction[];
        pagination: Pagination;
        filter: Filter;
      }>
    ) => {
      state.orders = action.payload.orders;
      state.pagination = action.payload.pagination;
      state.filter = action.payload.filter;
    },
    clearOrders: (state) => {
      state.orders = [];
      state.pagination = initialState.pagination;
      state.filter = initialState.filter;
    },
  },
});

export const { setOrders, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;