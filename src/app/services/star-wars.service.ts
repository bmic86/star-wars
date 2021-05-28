import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs'
import { map, pluck, shareReplay } from 'rxjs/operators'
import { PeoplePage } from '../models/people-page'
import { Person } from '../models/person'
import { Starship } from '../models/starship'

@Injectable()
export class StarWarsService {
	constructor(private httpClient: HttpClient) {}

	getPeoplePage(
		page: number = 1,
		searchByName: string = ''
	): Observable<PeoplePage> {
		return this.httpClient
			.get<PeoplePage>(this.generatePeoplePageUrl(page, searchByName?.trim()))
			.pipe(
				map((peoplePage: PeoplePage) => {
					peoplePage.results = peoplePage.results.map((person: any) => {
						return {
							name: person.name,
							birthYear: person.birth_year,
							gender: person.gender,
							skinColor: person.skin_color,
							hairColor: person.hair_color,
							height: person.height,
							mass: person.mass,
							vehiclesNum: person.vehicles?.length ?? 0,
							species$: (
								forkJoin(
									person.species.map((specieUrl: string) =>
										this.httpClient.get(specieUrl).pipe(pluck('name'))
									)
								) as Observable<string[]>
							).pipe(shareReplay()),
							starships$: (
								forkJoin(
									person.starships.map((starshipUrl: string) =>
										this.httpClient.get<Starship>(starshipUrl)
									)
								) as Observable<Starship[]>
							).pipe(shareReplay())
						} as Person
					})
					return peoplePage
				})
			)
	}

	private generatePeoplePageUrl(page: number, searchByName: string): string {
		return searchByName
			? `http://swapi.dev/api/people/?page=${page}&search=${searchByName}`
			: `http://swapi.dev/api/people/?page=${page}`
	}
}
