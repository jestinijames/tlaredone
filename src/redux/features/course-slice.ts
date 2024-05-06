/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

import course_data from '@/data/course-data';

const initialState = {
  courses: course_data,
  course: {},
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
});

//export const {} = courseSlice.actions;
export const selectCourses = (state: { courses: { courses: any } }) =>
  state.courses.courses;
export default courseSlice.reducer;
