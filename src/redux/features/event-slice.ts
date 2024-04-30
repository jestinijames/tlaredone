/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

interface EventState {
  categories: any[]; // Define the type of categories here
}

const initialState: EventState = {
  categories: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    add_category: (state, { payload }) => {
      if (payload.changeType === 'remove') {
        state.categories = state.categories.filter(
          (category) => category !== payload.item
        );
      } else if (payload.changeType === 'added') {
        state.categories.push(payload.item);
      }
    },
  },
});

export const { add_category } = eventSlice.actions;
export default eventSlice.reducer;
