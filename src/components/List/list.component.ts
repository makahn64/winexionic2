import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Winery } from '../../types/winex.type';

@Component({
  selector: 'list-component',
  templateUrl: 'list.component.html'
})
export class ListComponent {

  title = "Lists";

  wineries = Array<Winery>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
