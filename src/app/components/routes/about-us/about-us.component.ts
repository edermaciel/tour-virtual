import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {
  aboutUsObj = {
    image: 'assets/images/banner_03.png',
    title: 'Soledade de Minas',
    subTitle: 'Pousada Doce Recanto',
    description: 'A Pousada Doce Recanto é mais do que apenas uma propriedade localizada na cidade de Soledade de Minas. É um lugar onde a natureza exuberante se une à história e à herança de uma família. A propriedade, passada de geração em geração, herdada do Sr. Justo Maciel, o patriarca da família, é cercada por uma fauna e flora rica e abundante. Os hóspedes podem desfrutar de passeios ao bosque, onde é possível apreciar a diversidade de espécies de plantas e animais, além de um passeio no apiário, onde os hóspedes podem conhecer o mundo das abelhas e seus produtos. Para os amantes de cavalos, a pousada oferece também passeios a cavalo, onde é possível explorar a bela paisagem da propriedade. A Pousada Doce Recanto é o lugar perfeito para aqueles que buscam tranquilidade, contato com a natureza e uma ligação com a história e a herança de uma família. E para aqueles que desejam conhecer as principais estâncias hidrominerais, São Lourenço e Caxambú.'
  }

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('about-us-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }

}
