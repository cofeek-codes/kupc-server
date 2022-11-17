import { Body, Controller, Get, Post } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
	@Post('/login')
async	login(@Body() dto: LoginDTO) {
		return this.userService.login(dto)
	}
}
