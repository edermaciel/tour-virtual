import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.less']
})
export class LocalizationComponent implements OnInit, AfterViewInit {
  map: any;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
