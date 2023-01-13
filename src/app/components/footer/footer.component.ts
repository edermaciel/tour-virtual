import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  @Input('showName') showName: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  redirectToUrl(event: Event): void {
    console.log((<HTMLElement>event.target).dataset['value']!);
    // window.open((<HTMLElement>event.target).dataset['value']!, '_blank')?.focus();
  }

}
