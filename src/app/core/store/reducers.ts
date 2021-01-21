import { createReducer, on } from '@ngrx/store';
import { scrollToFoodMenuUpdate, scrollToLocationUpdate, scrollToSpecialUpdate, scrollToWineMenuUpdate } from './action';

export const scrollToSpecialReducer = createReducer<number>(
  0,
  on(scrollToSpecialUpdate, (state, action) => state + 1)
);

export const scrollToFoodMenuReducer = createReducer<number>(
  0,
  on(scrollToFoodMenuUpdate, (state, action) => state + 1)
);

export const scrollToWineMenuReducer = createReducer<number>(
  0,
  on(scrollToWineMenuUpdate, (state, action) => state + 1)
);

export const scrollToLocationReducer = createReducer<number>(
  0,
  on(scrollToLocationUpdate, (state, action) => state + 1)
);
