import { Component, OnInit } from '@angular/core';
import { WineList } from '@core/model/model';
import { DataSourceService } from '@core/services/data-source.service';

@Component({
  selector: 'app-wine-menu',
  templateUrl: './wine-menu.component.html',
  styleUrls: ['./wine-menu.component.scss']
})
export class WineMenuComponent implements OnInit {

  public wineListPartOne: WineList[];//菜單一號
  public wineListPartTwo: WineList[];//菜單二號

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    this.getFoodListOne();
    this.getFoodListTwo();
  }

  /** 取得菜單一號 */
  private getFoodListOne() {
    this.wineListPartOne = this.dataSourceService.getWineListPartOne();
  }
  /** 取得菜單一號 */
  private getFoodListTwo() {
    this.wineListPartTwo = this.dataSourceService.getWineListPartTwo();
  }

}
