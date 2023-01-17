import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
  topicsList: any[] = [
    { link: 'acomodacao', name: 'Acomodações' },
    { link: 'passeios', name: 'Passeios' },
    { link: 'sobre-nos', name: 'Área de lazer' },
    { link: 'contato', name: 'Contato' },
    { link: 'localizacao', name: 'Localização' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
