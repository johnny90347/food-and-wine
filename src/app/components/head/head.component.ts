import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  public fixHeader = false;

  constructor() { }

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

}
