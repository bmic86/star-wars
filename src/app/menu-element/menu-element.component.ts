import { Component, Input, OnInit } from '@angular/core'
import { Person } from '../models/person'

@Component({
	selector: 'app-menu-element',
	templateUrl: './menu-element.component.html',
	styleUrls: ['./menu-element.component.css']
})
export class MenuElementComponent implements OnInit {
	@Input() person!: Person

	constructor() {}

	ngOnInit(): void {}
}
