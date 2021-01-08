import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { headerSlideAnimation } from '../../core/animation/animation';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    headerSlideAnimation
  ]
})
export class MainPageComponent implements OnInit {

  public showPinnedHeader = false; // 顯示置頂

  constructor() { }

  ngOnInit(): void {
  }

  /** 滾動監聽 */
  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {

    console.log(window.pageYOffset)
    if (window.pageYOffset >= 100) {
      this.showPinnedHeader = true;
    } else {
      this.showPinnedHeader = false;
    }
  }

}
