import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  host: {
    '(document:click)': 'onClick($event)'
  },
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @ViewChild('listMenuMobile') listMenuMobile!: ElementRef<HTMLUListElement>;
  @ViewChild('containerLabel') containerLabel!: ElementRef<HTMLLabelElement>;

  listMenu: any[] = [
    { title: 'Tour Virtual', link: '/tour' },
    { title: 'Recursos', link: '/recursos' },
    { title: 'Preços', link: '/precos' },
  ];

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    let span = this.containerLabel!.nativeElement.children[0] as HTMLSpanElement;
    if (!this._eref.nativeElement.contains(event.target)) {
      this.listMenuMobile!.nativeElement.classList.replace('open-menu', 'close-menu');
      this.containerLabel!.nativeElement.style.background = '#FFFFFF';
      span.classList.toggle('header__menu-hamburguer-open');
      span.classList.toggle('header__menu-hamburguer');
    }
  }

  openMenu(): void {
    let span = this.containerLabel!.nativeElement.children[0] as HTMLSpanElement;
    if (this.listMenuMobile!.nativeElement.classList.contains('open-menu')) {
      this.listMenuMobile!.nativeElement.classList.replace('open-menu', 'close-menu');
      this.containerLabel!.nativeElement.style.background = '#FFFFFF';
      span.classList.toggle('header__menu-hamburguer-open');
      span.classList.toggle('header__menu-hamburguer');
    } else {
      span.classList.toggle('header__menu-hamburguer');
      span.classList.toggle('header__menu-hamburguer-open');
      span.style.backgroundImage = '/assets/images/menu-white.png';
      this.containerLabel!.nativeElement.style.background = '#327F8F';
      this.listMenuMobile!.nativeElement.classList.replace('close-menu', 'open-menu');
    }
  }

}
