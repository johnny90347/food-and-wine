import { scrollToFoodMenuUpdate, scrollToLocationUpdate, scrollToSpecialUpdate, scrollToWineMenuUpdate } from './../store/action';
import { Injectable } from '@angular/core';
import { GlobalState } from '@core/store/state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private store: Store<GlobalState>) { }

  /** 觸發滾動到預定料理 */
  public triggerScrollToSpecialMenu() {
    this.store.dispatch(scrollToSpecialUpdate({ scrollToSpecail: 1 }));
  }

  /** 觸發滾動到最新菜單 */
  public triggerScrollToFoodMenu() {
    this.store.dispatch(scrollToFoodMenuUpdate({ scrollToFoodMenu: 1 }));
  }

  /** 觸發滾動到最新酒單 */
  public triggerScrollToWineMenu() {
    this.store.dispatch(scrollToWineMenuUpdate({ scrollToWineMenu: 1 }));
  }

  /** 觸發滾動到地理位置 */
  public triggerScrollToLocation() {
    this.store.dispatch(scrollToLocationUpdate({ scrollToLocation: 1 }));
  }
}
