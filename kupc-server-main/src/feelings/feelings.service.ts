import { Injectable } from '@nestjs/common'
import { Feeling } from './entities/feeling.entity'

@Injectable()
export class FeelingsService {
	feelings: Feeling[] = [
		{
			id: 1,
			title: 'happiness',
			image: 'happiness.png',
			position: 1,
		},
	]
	getFeelings() {
		return { success: true, data: this.feelings }
	}
}
