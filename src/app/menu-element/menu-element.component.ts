import { Component, Input } from '@angular/core'
import { Person } from '../models/person'

@Component({
	selector: 'app-menu-element',
	templateUrl: './menu-element.component.html',
	styleUrls: ['./menu-element.component.css']
})
export class MenuElementComponent {
	@Input() person!: Person
	@Input() isActive: boolean = false
}
