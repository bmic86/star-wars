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
		pageNum: number = 1,
		searchByName: string = ''
	): Observable<PeoplePage> {
		return this.httpClient
			.get(this.generatePeoplePageUrl(pageNum, searchByName))
			.pipe(
				map((swapiPeoplePage: any) => {
					return this.createPeoplePageFromResponse(pageNum, swapiPeoplePage)
				})
			)
	}

	private createPeoplePageFromResponse(pageNum: number, swapiPeoplePage: any) {
		const peoplePage: PeoplePage = {
			pageNum: pageNum,
			hasNextPage: !!swapiPeoplePage.next,
			hasPreviousPage: !!swapiPeoplePage.previous,
			results: swapiPeoplePage.results.map((swapiPerson: any) => {
				return this.createPersonFromResponse(swapiPerson)
			})
		}
		return peoplePage
	}

	private createPersonFromResponse(swapiPerson: any) {
		const person: Person = {
			name: swapiPerson.name,
			birthYear: swapiPerson.birth_year,
			gender: swapiPerson.gender,
			skinColor: swapiPerson.skin_color,
			hairColor: swapiPerson.hair_color,
			height: swapiPerson.height,
			mass: swapiPerson.mass,
			vehiclesNum: swapiPerson.vehicles?.length ?? 0,
			specieNames$: (
				forkJoin(
					swapiPerson.species.map((specieUrl: string) =>
						this.httpClient.get(specieUrl).pipe(pluck('name'))
					)
				) as Observable<string[]>
			).pipe(shareReplay()),
			starships$: (
				forkJoin(
					swapiPerson.starships.map((starshipUrl: string) =>
						this.httpClient.get<Starship>(starshipUrl)
					)
				) as Observable<Starship[]>
			).pipe(shareReplay())
		}
		return person
	}

	private generatePeoplePageUrl(page: number, searchByName: string): string {
		return searchByName
			? `http://swapi.dev/api/people/?page=${page}&search=${searchByName}`
			: `http://swapi.dev/api/people/?page=${page}`
	}
}
