import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PeoplePage } from '../models/people-page'
import { Person } from '../models/person'

@Component({
	selector: 'app-menu-container',
	templateUrl: './menu-container.component.html',
	styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
	@Input() page!: PeoplePage

	@Output() onSelectedPersonChanged: EventEmitter<Person> =
		new EventEmitter<Person>()
	@Output() onPageChanged: EventEmitter<number> = new EventEmitter<number>()

	selectedPerson: Person | null = null

	constructor() {}

	ngOnInit(): void {}

	onMenuElementClick(selectedPerson: Person): void {
		this.selectedPerson = selectedPerson
		this.onSelectedPersonChanged.emit(selectedPerson)
	}

	onPreviousPageClick(): void {
		this.onPageChanged.emit(this.page.pageNum - 1)
	}

	onNextPageClick(): void {
		this.onPageChanged.emit(this.page.pageNum + 1)
	}
}
