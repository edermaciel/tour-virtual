import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.less']
})
export class ToursComponent implements OnInit {

  listItems: any[] = [
    {
      title: "Turismo Cultural",
      content: "O Circuito das Águas é patrimônio da Cultura Mineira. Tradições, gastronomia diversificada, artesanato variado. O cenário cultural da região é extremamente convidativo, inclusive para o turismo de estudos e intercâmbios, valorizando e promovendo os bens materiais da cultura.",
      image: 'assets/images/cultura-icone.png'
    },
    {
      title: 'Turismo Rural',
      content: 'Um conjunto de atividades turísticas desenvolvidas no meio rural, comprometido com a produção agropecuária, agregando valor a produtos e serviços, resgatando e promovendo o patrimônio cultural e natural da comunidade, atendendo também pelo chamado Agroturismo.',
      image: 'assets/images/turismo-rural-icone.png'
    },
    {
      title: 'Turismo Histórico',
      content: 'O Circuito da Águas é parte do berço histórico de Minas Gerais, rico em lembranças e causos, explore o circuito. Surpreenda-se com o Turismo de Experiência, Conheça nossos patrimônios Históricos, viagem pela Estrada Real. Explore toda a História deste Circuito.',
      image: 'assets/images/historia-icone.png'
    },
    {
      title: 'Ecoturismo',
      content: 'A Natureza é o ponto alto do Circuito das Águas, O Ecoturismo é um segmento da atividade turística que utiliza, de forma sustentável, o patrimônio natural e cultural, incentiva sua conservação e busca a formação de uma consciência ambientalista por meio da interpretação do ambiente, promovendo o bem-estar das populações.',
      image: 'assets/images/natureza-icone.png'
    },
    {
      title: 'Turismo de Bem Estar',
      content: 'Turismo de Saúde, ou turismo de bem-estar constitui-se das atividades turísticas decorrentes da utilização de meios e serviços para fins médicos, terapêuticos e estéticos. O Circuito das Águas é o berço da Água Medicinal, das curas terapêuticas, do turismo esotérico. Venha se cuidar no Circuito, desfrute do melhor que temos a oferecer.',
      image: 'assets/images/turismo-de-bem-estar-icone.png'
    },
    {
      title: 'Turismo Religioso',
      content: 'A fé dessa gente mineira circundada pelas tradições faz desses municípios redutos de paz e espiritualidade. O Turismo Religioso configura-se pelas atividades turísticas decorrentes da busca espiritual e da prática religiosa em espaços e eventos relacionados às religiões institucionalizadas.',
      image: 'assets/images/religiosidade-icone.png'
    },
  ];

  cities: any[] = [
    { title: "Soledade de Minas", content: "Você está aqui!", image: 'assets/images/soledade.png', link_social: 'https://instagram.com/pousadadocerecanto' },
    { title: "São Lourenço", content: "Distância: 8.8km (14min)", image: 'assets/images/saolourenco.png', link_social: 'https://www.instagram.com/saolourenco__mg' },
    { title: "Baependi", content: "Distância: 25.3km (28min)", image: 'assets/images/baependi.png', link_social: 'https://www.instagram.com/baependi_mg' },
    { title: "Caxambu", content: "Distância: 20.2km (19min)", image: 'assets/images/caxambu.png', link_social: 'https://www.instagram.com/caxambu_mg.turismo' },
  ]

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('tours-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }

}
