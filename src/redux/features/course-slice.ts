/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

import courses_data from '@/data/courses-data';

const initialState = {
  courses: courses_data,
  course: {},
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    single_product: (state, { payload }) => {},
  },
});

export const { single_product } = courseSlice.actions;
export const selectCourses = (state: { courses: { courses: any } }) =>
  state.courses.courses;
export default courseSlice.reducer;
