import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { PeoplePage } from './models/people-page'
import { Person } from './models/person'
import { StarWarsService } from './services/star-wars.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'star-wars'
	page$!: Observable<PeoplePage>
	selectedPerson: Person | null = null

	constructor(private starWarsService: StarWarsService) {}

	ngOnInit(): void {
		this.page$ = this.starWarsService.getPeoplePage()
	}

	selectedPersonChanged(selectedPerson: Person): void {
		this.selectedPerson = selectedPerson
	}
}
