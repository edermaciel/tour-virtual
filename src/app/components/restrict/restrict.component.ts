import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.less']
})
export class RestrictComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      let btn = document.getElementById('restrict-sticky-btn') as HTMLElement;
      btn.classList.add('fade-in');
    }, 1500);
  }
}
