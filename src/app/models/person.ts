import { Observable } from 'rxjs'
import { Starship } from './starship'

export interface Person {
	name: string
	height: string
	mass: string
	hairColor: string
	skinColor: string
	birthYear: string
	gender: string
	vehiclesNum: number
	specieNames$: Observable<string[]>
	starships$: Observable<Starship[]>
}
