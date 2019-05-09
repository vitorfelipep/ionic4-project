import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadPlaces: Array<Place>;
  listedLoadedPlaces: Array<Place>;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadPlaces = this.placesService.getAllPlaces();
    this.listedLoadedPlaces = this.loadPlaces;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
