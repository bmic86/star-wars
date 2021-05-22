import { Component, Input, OnInit } from '@angular/core'
import { Character } from '../models/character'

@Component({
	selector: 'app-menu-element',
	templateUrl: './menu-element.component.html',
	styleUrls: ['./menu-element.component.css']
})
export class MenuElementComponent implements OnInit {
	@Input() character!: Character

	constructor() {}

	ngOnInit(): void {}
}
