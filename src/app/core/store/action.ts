import { createAction, props } from '@ngrx/store';

export const scrollToSpecialUpdate = createAction(
  '[Global] scrollToSpecail',
  props<{ scrollToSpecail: number }>()
)

export const scrollToFoodMenuUpdate = createAction(
  '[Global] scrollToFoodMenu',
  props<{ scrollToFoodMenu: number }>()
)

export const scrollToWineMenuUpdate = createAction(
  '[Global] scrollToWineMenu',
  props<{ scrollToWineMenu: number }>()
)

export const scrollToLocationUpdate = createAction(
  '[Global] scrollToLocation',
  props<{ scrollToLocation: number }>()
)
