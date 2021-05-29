import { Person } from './person'

export interface PeoplePage {
	pageNum: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	results: Person[]
}
