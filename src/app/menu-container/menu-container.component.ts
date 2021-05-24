import { Component, Input, OnInit } from '@angular/core'
import { PeoplePage } from '../models/people-page'

@Component({
	selector: 'app-menu-container',
	templateUrl: './menu-container.component.html',
	styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
	@Input() page!: PeoplePage

	constructor() {}

	ngOnInit(): void {}
}
