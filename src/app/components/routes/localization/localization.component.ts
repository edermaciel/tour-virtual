import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.less']
})
export class LocalizationComponent implements OnInit, AfterViewInit {
  listItems: any[] = [
    {
      title: "Turismo Cultural",
      content: "O Circuito das Águas é patrimônio da Cultura Mineira. Tradições, gastronomia diversificada, artesanato variado. O cenário cultural da região é extremamente convidativo, inclusive para o turismo de estudos e intecâmbios, valorizando e promovendo os bens mateiais da cultura.",
      image: 'assets/images/cultura-icone.png'
    },
    {
      title: 'Turismo Rural',
      content: 'Um conjunto de atividades turísticas desenvolvidas no meio rural, comprometido com a produção agropecuaária, agregando valor a produtos e serviços, resgatando e promovendo o patrimônio cultural e natural da comunidade, atendendo também pelo chamado Agroturismo.',
      image: 'assets/images/turismo-rural-icone.png'
    },
    {
      title: 'Turismo Histórico',
      content: 'O Cirtcuito da Águas é parte do berço histórico de Minas Gerais, rico em lembranças e causos, explore o circuito. Surpeenda-se com o Turismo de Experiência, Conheça nossos patrimônios Históricos, viage pela Estrada Real. Explore toda a História deste Circuito.',
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
    {
      title: "Soledade de Minas",
      content: "Você está aqui!",
      image: 'assets/images/soledade.png',
      link_social: 'https://instagram.com/pousadadocerecanto'
    },
    {
      title: "São Lourenço",
      content: "Distância: 8.8km (14min)",
      image: 'assets/images/saolourenco.png',
      link_social: ''
    },
    {
      title: "Baependi",
      content: "Distância: 25.3km (28min)",
      image: 'assets/images/baependi.png',
      link_social: ''
    },
    {
      title: "Caxambu",
      content: "Distância: 20.2km (19min)",
      image: 'assets/images/caxambu.png',
      link_social: ''
    },
  ]

  map: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => { this.loadMap(); }, 1000);
  }

  private loadMap(): void {
    const center = new L.LatLng(-22.047632000931056, -45.04335902862759);

    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${environment.mapbox.accessToken}`, {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);

    this.map.flyTo(center, 13);

    const icon = L.icon({
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png',
      popupAnchor: [13, 0],
    });

    const marker = L.marker(center, { icon }).bindPopup('Rua Justo Antonio Maciel - nº 0');
    marker.addTo(this.map);
    this.map.attributionControl.setPrefix('');
  }

}
