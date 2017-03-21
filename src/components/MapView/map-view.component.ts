import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'map-view',
  templateUrl: 'map-view.component.html'
})
export class MapViewComponent {

  title = "Map";

  constructor(public navCtrl: NavController) {
    
  }

}
