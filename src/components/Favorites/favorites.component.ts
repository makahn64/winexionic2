import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'favorites',
	templateUrl: 'favorites.component.html'
})
export class FavoritesComponent implements OnInit {
	
	title = "Favorites";
	
	constructor() { }

	ngOnInit() { }
}