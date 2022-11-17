import { Injectable } from '@nestjs/common'
import { Quote } from './entities/quote.entity'

@Injectable()
export class QuotesService {
	quotes: Quote[] = [
		{
			id: 1,
			title: 'quote 1',
			image: '../quote.jpg',
			description: 'first quote',
		},
	]
	getQuotes() {
		return { success: true, data: this.quotes }
	}
}
