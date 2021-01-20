import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { headerSlideAnimation } from '../../core/animation/animation';
import * as smoothscroll from "smoothscroll-polyfill";
import { select, Store } from '@ngrx/store';
import { GlobalState } from '@core/store/state';
import { tap } from 'rxjs/operators';

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
  @ViewChild("special") specialEl: ElementRef;

  constructor(private store: Store<GlobalState>) { smoothscroll.polyfill(); }

  ngOnInit(): void {
    this.listenScrollToSpecial();
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

    this.specialEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    // this.foodMenuRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }


  private listenScrollToSpecial() {
    this.store.pipe(
      select(state => state.scrollToSpecial),
      tap((value) => {
        if (value === 0) return;
        this.scrollToSpecialPosition();
      })
    ).subscribe();
  }

  private scrollToSpecialPosition() {
    this.specialEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
