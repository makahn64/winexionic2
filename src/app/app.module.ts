import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapViewComponent } from '../components/MapView/map-view.component';
import { ListComponent } from '../components/List/list.component';
import { DetailViewComponent } from '../components/DetailView/detail-view.component';
import { FavoritesComponent } from '../components/Favorites/favorites.component';
import { ToursComponent } from '../components/Tours/tours.component';

@NgModule({
  declarations: [
    MyApp,
    MapViewComponent,
    ListComponent,
    DetailViewComponent,
    FavoritesComponent,
    ToursComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapViewComponent,
    ListComponent,
    DetailViewComponent,
    FavoritesComponent,
    ToursComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
