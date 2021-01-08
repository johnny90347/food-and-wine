import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPinnedHeader]'
})
export class PinnedHeaderDirective {

  constructor(
    private el: ElementRef,
    private render: Renderer2,
  ) { }

  /** 滾動監聽 */
  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    console.log("Scroll Event", window.pageYOffset);
    if (window.pageYOffset >= 150) {
      this.addClass();
    } else {
      this.removeClass();
    }
  }
  /** 加上class */
  private addClass() {
    this.render.addClass(this.el.nativeElement, 'use-pinned');
  }
  /** 移除class */
  private removeClass() {
    this.render.removeClass(this.el.nativeElement, 'use-pinned');
  }
}
