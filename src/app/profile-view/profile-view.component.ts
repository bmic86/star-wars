import { Component, Input, OnInit } from '@angular/core'
import { Person } from '../models/person'

@Component({
	selector: 'app-profile-view',
	templateUrl: './profile-view.component.html',
	styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
	@Input() person: Person | null = null

	constructor() {}

	ngOnInit(): void {}
}
