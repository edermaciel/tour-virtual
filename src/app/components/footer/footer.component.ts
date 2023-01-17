import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  @Input('showName') showName: boolean = true;

  linkList: any[] = [
    { link: 'https://wa.me/5535991304000?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Doce%20Recanto,%20você%20pode%20me%20ajudar?%20Agradeço desde já!%20:)', image: 'assets/images/whatsapp.png', description: 'Contato do Whatsapp', width: '40', height: '40' },
    { link: 'https://facebook.com/pousadadocerecanto', image: 'assets/images/facebook.png', description: 'Perfil do Facebook', width: '35', height: '35' },
    { link: 'https://instagram.com/pousadadocerecanto', image: 'assets/images/instagram.png', description: 'Perfil do Instagram', width: '35', height: '35' }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
