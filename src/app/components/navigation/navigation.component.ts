import { Component, OnInit } from '@angular/core';
import { AppService } from '@core/services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  /** 觸發滾動到預定料理 */
  public sendScrollToSpecial() {
    this.appService.triggerScrollToSpecialMenu();
  }

  /** 觸發滾動到最新菜單 */
  public sendScrollToFoodMenu() {
    this.appService.triggerScrollToFoodMenu();
  }

  /** 觸發滾動到最新酒單 */
  public sendScrollToWineMenu() {
    this.appService.triggerScrollToWineMenu();
  }

  /** 觸發滾動到店家位置 */
  public sendScrollToPosition() {
    this.appService.triggerScrollToLocation();
  }

}
