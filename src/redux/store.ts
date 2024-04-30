import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './features/auth-slice';
import courseSlice from './features/course-slice';
import eventSlice from './features/event-slice';
import filterSlice from './features/filter-slice';

const rootReducer = combineReducers({
  auth: authSlice,
  courses: courseSlice,
  event: eventSlice,
  filter: filterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
