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
	page$!: Observable<PeoplePage>
	selectedPerson: Person | null = null

	private searchText: string = ''

	constructor(private starWarsService: StarWarsService) {}

	ngOnInit(): void {
		this.loadData()
	}

	selectedPersonChanged(selectedPerson: Person): void {
		this.selectedPerson = selectedPerson
	}

	pageChanged(newPageNumber: number) {
		this.loadData(newPageNumber)
	}

	searchTextChanged(newSearchText: string = '') {
		this.searchText = newSearchText
		this.loadData()
	}

	private loadData(pageNum: number = 1) {
		this.page$ = this.starWarsService.getPeoplePage(pageNum, this.searchText)
	}
}
