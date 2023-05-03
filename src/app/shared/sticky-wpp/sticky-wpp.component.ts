import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sticky-wpp',
  templateUrl: './sticky-wpp.component.html',
  styleUrls: ['./sticky-wpp.component.less']
})
export class StickyWppComponent implements OnInit {
  @Input('showScrollTop') showScrollTop: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // window.onscroll = function () {
    //   if (window.innerHeight + window.scrollY + 800 >= document.body.offsetHeight) {
    //     // display the button
    //     (<HTMLElement>document.querySelector(".bottom-right-button")!).style.display = "block";
    //     // fade in the button
    //     (<HTMLElement>document.querySelector(".bottom-right-button")!).style.opacity = '1';
    //   } else {
    //     (<HTMLElement>document.querySelector(".bottom-right-button")!).style.opacity = '0';
    //   }
    // };
  }

  goTop(): void {
    document.querySelector("body")!.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
