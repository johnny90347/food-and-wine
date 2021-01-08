import { DataSourceService } from './../../services/data-source.service';
import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/core/model/model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public foodListPartOne: FoodList[];//菜單一號
  public foodListPartTwo: FoodList[];//菜單二號

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    this.getFoodListOne();
    this.getFoodListTwo();
  }

  /** 取得菜單一號 */
  private getFoodListOne() {
    this.foodListPartOne = this.dataSourceService.getFoodListPartOne()
  }
  /** 取得菜單一號 */
  private getFoodListTwo() {
    this.foodListPartTwo = this.dataSourceService.getFoodListPartTwo();
  }
}
