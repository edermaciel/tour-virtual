import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
  topicsList: any[] = [
    { link: 'tour', name: 'Tour Virtual' },
    { link: 'recursos', name: 'Recursos' },
    { link: 'precos', name: 'Preços' },
    { link: 'contato', name: 'Contato' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
