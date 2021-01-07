import { DataSourceService } from './../../services/data-source.service';
import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/core/model/model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public foodListPartOne: FoodList[];

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    this.getFoodList();
  }

  /** 取得菜單一號 */
  private getFoodList() {
    this.foodListPartOne = this.dataSourceService.getFoodListPartOne()
  }
}
