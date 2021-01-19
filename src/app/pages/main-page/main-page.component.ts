import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { headerSlideAnimation } from '../../core/animation/animation';
import * as smoothscroll from "smoothscroll-polyfill";

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
  @ViewChild("myElem") MyProp: ElementRef;

  constructor() { smoothscroll.polyfill(); }

  ngOnInit(): void {
  }

  // /** 滾動監聽 */
  // @HostListener("window:scroll", ['$event'])
  // onWindowScroll() {
  //   if (window.pageYOffset >= 100) {
  //     this.showPinnedHeader = true;
  //   } else {
  //     this.showPinnedHeader = false;
  //   }
  // }

  public scrolltest() {

    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    // this.foodMenuRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
