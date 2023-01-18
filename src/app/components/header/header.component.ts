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
    { title: 'Contato', link: '/contato' },
    { title: 'Acomodações', link: '/acomodacao' },
    { title: 'Localização', link: '/localizacao' },
    { title: 'Passeios', link: '/passeios' },
    { title: 'Sobre Nós', link: '/sobre-nos' },
  ];

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.listMenuMobile!.nativeElement.classList.replace('open-menu', 'close-menu');
      this.containerLabel!.nativeElement.style.background = '#FFFFFF';
    }
  }

  openMenu(): void {
    if (this.listMenuMobile!.nativeElement.classList.contains('open-menu')) {
      this.listMenuMobile!.nativeElement.classList.replace('open-menu', 'close-menu');
      this.containerLabel!.nativeElement.style.background = '#FFFFFF';
    } else {
      this.containerLabel!.nativeElement.style.background = '#EB9800';
      this.listMenuMobile!.nativeElement.classList.replace('close-menu', 'open-menu');
    }
  }

}
