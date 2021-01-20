import { GlobalState } from './../../core/store/state';
import { AppService } from '@core/services/app.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  public fixHeader = false;

  constructor(private appService: AppService) { }

  /** 滾動監聽 */
  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    if (window.pageYOffset >= 100) {
      this.fixHeader = true;
    } else {
      this.fixHeader = false;
    }
  }

  ngOnInit(): void {

  }

  /** 觸發滾動到預定料理 */
  public sendScrollToSpecial() {
    this.appService.triggerScrollToSpecialMenu();
  }




}
