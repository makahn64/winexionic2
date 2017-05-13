import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MapViewComponent } from '../components/MapView/map-view.component';
import { ListComponent } from '../components/List/list.component';
import { ToursComponent } from '../components/Tours/tours.component';
import { FavoritesComponent } from '../components/Favorites/favorites.component';
import { CreateOrSignInComponent } from '../components/CreateOrSignIn/createorsignin.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CreateOrSignInComponent;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { 
        title: 'Map',
        icon: '../assets/img/k3.png',
        component: MapViewComponent
      },
      { 
        title: 'List',
        icon: '../assets/img/k3.png',
        component: ListComponent 
      },
      {
        title: "Favorites",
        icon: '../assets/img/k3.png',
        component: FavoritesComponent
      },
      {
        title: "Tours",
        icon: '../assets/img/k3.png',
        component: ToursComponent
      }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
