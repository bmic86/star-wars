import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { concat, forkJoin, merge, Observable } from 'rxjs'
import { map, pluck, reduce } from 'rxjs/operators'
import { PeoplePage } from '../models/people-page'
import { Person } from '../models/person'

@Injectable()
export class StarWarsService {
	constructor(private httpClient: HttpClient) {}

	getPeoplePage(page: number = 1): Observable<PeoplePage> {
		return this.httpClient
			.get<PeoplePage>(`http://swapi.dev/api/people/?page=${page}`)
			.pipe(
				map((peoplePage) => {
					peoplePage.results = peoplePage.results.map((person: any) => {
						// 	let species$: Observable<string[]> = merge(
						// 		person.species.map(
						// 			(specieUrl: string) =>
						// 				this.httpClient
						// 					.get<Specie>(specieUrl)
						// 					.pipe(pluck('name')) as Observable<string>
						// 		).map(x => x.)
						// 	)

						return {
							name: person.name,
							birthYear: person.birth_year,
							species: person.species
						} as Person
					})
					return peoplePage
				})
			)
	}
}

//interface Specie {
//	name: string
//}
