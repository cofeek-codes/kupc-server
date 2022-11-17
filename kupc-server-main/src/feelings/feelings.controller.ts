import { Controller, Get } from '@nestjs/common'
import { FeelingsService } from './feelings.service'

@Controller('feelings')
export class FeelingsController {
	constructor(private readonly feelingsService: FeelingsService) {}
	@Get()
	getFeelings() {
		return this.feelingsService.getFeelings()
	}
}
