import { Component, Input, OnInit } from '@angular/core'
import { PeoplePage } from '../models/people-page'
import { Person } from '../models/person'

@Component({
	selector: 'app-menu-container',
	templateUrl: './menu-container.component.html',
	styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
	@Input() page!: PeoplePage

	selectedPerson: Person | null = null

	constructor() {}

	ngOnInit(): void {}
}
