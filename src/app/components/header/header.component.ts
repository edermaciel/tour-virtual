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
    { title: 'Página Inicial', link: '/' },
    { title: 'Tour Virtual', link: '/tour' },
    { title: 'Recursos', link: '/recursos' },
    { title: 'Contato', link: '/contato' },
  ];

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    if (!this._eref.nativeElement.contains(event.target)) {
      let span = this.containerLabel!.nativeElement.children[0] as HTMLSpanElement;
      if (this.listMenuMobile!.nativeElement.classList.contains('open-menu')) {
        this.containerLabel!.nativeElement.style.background = '#FFFFFF';
        this.listMenuMobile!.nativeElement.classList.replace('open-menu', 'close-menu');
        span.classList.replace('header__menu-hamburguer-open', 'header__menu-hamburguer');
      }
    }

  }

  openMenu(): void {
    let span = this.containerLabel!.nativeElement.children[0] as HTMLSpanElement;
    if (this.listMenuMobile!.nativeElement.classList.contains('open-menu')) {
      this.listMenuMobile!.nativeElement.classList.replace('open-menu', 'close-menu');
      this.containerLabel!.nativeElement.style.background = '#FFFFFF';
      span.classList.replace('header__menu-hamburguer-open', 'header__menu-hamburguer');
    } else {
      console.log('test');
      span.classList.replace('header__menu-hamburguer', 'header__menu-hamburguer-open');
      this.containerLabel!.nativeElement.style.background = '#327F8F';
      this.listMenuMobile!.nativeElement.classList.replace('close-menu', 'open-menu');
    }
  }
}
