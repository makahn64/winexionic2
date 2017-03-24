import { Component, Input } from '@angular/core';

@Component({
	selector: 'header-bar',
	templateUrl: 'headerbar.component.html'
})
export class HeaderBarComponent {
	@Input() title: string;
}