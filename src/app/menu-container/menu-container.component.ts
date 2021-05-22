import { Component, OnInit } from '@angular/core'
import { Character } from '../models/character'

@Component({
	selector: 'app-menu-container',
	templateUrl: './menu-container.component.html',
	styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
	characters: Character[] = []

	constructor() {}

	ngOnInit(): void {
		this.characters = [
			{
				name: 'Luke Skywalker',
				birthYear: '19BBY',
				species: ['Human', 'test']
			},
			{ name: 'other', birthYear: '45BBY', species: ['1', '2'] }
		]
	}
}
