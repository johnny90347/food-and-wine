import { createReducer, on } from '@ngrx/store';
import { scrollToFoodMenuUpdate, scrollToLocationUpdate, scrollToSpecialUpdate } from './action';

export const scrollToSpecialReducer = createReducer<number>(
  0,
  on(scrollToSpecialUpdate, (state, action) => state++)
);

export const scrollToFoodMenuReducer = createReducer<number>(
  0,
  on(scrollToFoodMenuUpdate, (state, action) => state++)
);

export const scrollToWineMenuReducer = createReducer<number>(
  0,
  on(scrollToFoodMenuUpdate, (state, action) => state++)
);

export const scrollToLocationReducer = createReducer<number>(
  0,
  on(scrollToLocationUpdate, (state, action) => state++)
);
