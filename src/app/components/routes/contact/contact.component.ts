import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('contact-sticky-btn') as HTMLElement;
      btn.classList.add('fade-in');
    }, 2500);
  }

}
