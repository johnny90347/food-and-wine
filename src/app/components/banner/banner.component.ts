import { Component, OnInit } from '@angular/core';
import { inOutAnimation } from '@core/animation/animation';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [inOutAnimation]
})
export class BannerComponent implements OnInit {

  // myUrl = "/assets/images/foods/BBQ4.png";
  public showPic = [];

  public bannerList = ['BBQ1.png', 'BBQ2.png', 'BBQ3.png']

  constructor() { }


  index = 0;

  ngOnInit(): void {

    this.showPic.push(this.bannerList[this.index % 3]);

    setInterval(() => {

      this.showPic = [];
      this.index++;
      setTimeout(() => {
        this.showPic.push(this.bannerList[this.index % 3]);
      }, 1500);

    }, 6500);

    // setTimeout(() => {
    //   this.showPic.push(this.bannerList[this.index]);
    // }, 3000)

  }

}
