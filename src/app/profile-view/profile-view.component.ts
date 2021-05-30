import { Component, Input } from '@angular/core'
import { Person } from '../models/person'

@Component({
	selector: 'app-profile-view',
	templateUrl: './profile-view.component.html'
})
export class ProfileViewComponent {
	@Input() person: Person | null = null
}
