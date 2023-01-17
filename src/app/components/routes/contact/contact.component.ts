import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactObj = {
    title: 'Pousada Doce Recanto',
    subTitle: 'Reserve já sua estadia!',
    description: `Se desejar esclarecer alguma dúvida ou saber maiores informações, entre em contato conosco da maneira que você preferir. Será um prazer ajudarmos você a conhecer o sul de minas e tornar sua estadia inesquecível!`,
  }

  ownerList: any[] = [
    {
      ownerStatus: 'Proprietário',
      ownerEmail: 'emersonmacielefm@yahoo.com.br',
      ownerName: 'Emerson',
      ownerNumber: '(35) 99130-4000',
      ownerImage: 'assets/images/owners/emerson.jpg',
      ownerLink: 'https://wa.me/5535991304000?text=Olá,%20Emerson!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Doce%20Recanto,%20você%20pode%20me%20ajudar?%20Agradeço desde já!%20:)'
    },
    {
      ownerStatus: 'Sócio Proprietário',
      ownerEmail: '200otavio@gmail.com',
      ownerName: 'Otavio',
      ownerNumber: '(35) 98436-0898',
      ownerImage: 'assets/images/owners/otavio.jpg',
      ownerLink: 'https://wa.me/5535984360898?text=Olá,%20Otávio!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Doce%20Recanto,%20você%20pode%20me%20ajudar?%20Agradeço desde já!%20:)'
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
