import { Observable } from 'rxjs'

export interface Person {
	name: string
	height: string
	mass: string
	hairColor: string
	skinColor: string
	birthYear: string
	species$: Observable<string[]>
	gender: string
	vehiclesNum: number
}
