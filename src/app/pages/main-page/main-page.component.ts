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
  @ViewChild("specialAnchor") specialAnchorEl: ElementRef;
  @ViewChild("foodAnchor") foodAnchorEl: ElementRef;
  @ViewChild("wineAnchor") wineAnchorEl: ElementRef;
  @ViewChild("locationAnchor") locationAnchorEl: ElementRef;

  constructor(private store: Store<GlobalState>) { smoothscroll.polyfill(); }

  ngOnInit(): void {
    this.listenScrollToSpecial();
    this.listenScrollToFoodMenu();
    this.listenScrollToWineMenu();
    this.listenScrollToPosition();
  }

  // 監聽滾動到預定菜單
  private listenScrollToSpecial() {
    this.store.pipe(
      select(state => state.scrollToSpecial),
      tap((value) => {
        if (value === 0) return;
        this.scrollToSpecialOffset();
      })
    ).subscribe();
  }

  // 監聽滾動到最新菜單
  private listenScrollToFoodMenu() {
    this.store.pipe(
      select(state => state.scrollToFoodMenu),
      tap((value) => {
        if (value === 0) return;
        this.scrollToFoodMenuOffset();
      })
    ).subscribe();
  }

  // 監聽滾動到最新酒單
  private listenScrollToWineMenu() {
    this.store.pipe(
      select(state => state.scrollToWineMenu),
      tap((value) => {
        if (value === 0) return;
        this.scrollToWineMenuOffset();
      })
    ).subscribe();
  }

  // 監聽滾動到店家位置
  private listenScrollToPosition() {
    this.store.pipe(
      select(state => state.scrollToLocation),
      tap((value) => {
        if (value === 0) return;
        this.scrollToLocationOffset();
      })
    ).subscribe();
  }

  private scrollToSpecialOffset() {
    this.specialAnchorEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  private scrollToFoodMenuOffset() {
    this.foodAnchorEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  private scrollToWineMenuOffset() {
    this.wineAnchorEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  private scrollToLocationOffset() {
    this.locationAnchorEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
