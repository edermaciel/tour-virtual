import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactObj = {
    title: 'Immersive',
    subTitle: 'A Mudança Começa Agora!',
    description: `Nosso objetivo é fornecer um serviço excepcional aos nossos clientes. Se você precisar de ajuda ou tiver alguma dúvida, entre em contato conosco e teremos o maior prazer em ajudá-lo(a).`,
  }

  ownerList: any[] = [
    {
      ownerStatus: 'Proprietário',
      ownerEmail: 'immersive@gmail.com',
      ownerName: 'Gabriel Toledo',
      ownerNumber: '(35) 98867-9369',
      ownerImage: 'assets/images/owners/gabriel.jpg',
      ownerLink: 'https://wa.me/5535988679369?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20seu%20serviço,%20%20você%20pode%20me%20ajudar?%20Agradeço desde já!%20:)'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('contact-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }

}
