import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('about-us-sticky-btn') as HTMLElement;
      btn.classList.add('fade-in');
    }, 2500);
  }

}
