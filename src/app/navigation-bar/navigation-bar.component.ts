import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
	@Output() onSearchPerformed: EventEmitter<string> = new EventEmitter<string>()

	searchTextControl!: FormControl
	searchForm!: FormGroup

	ngOnInit(): void {
		this.initSearchForm()
	}

	onSubmitSearch(): void {
		this.onSearchPerformed.emit(this.searchTextControl.value)
	}

	private initSearchForm(): void {
		this.searchTextControl = new FormControl('')
		this.searchForm = new FormGroup({
			searchTextControl: this.searchTextControl
		})
	}
}
