import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LoginDTO } from './dto/login.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
	async login(dto: LoginDTO) {
		const mockUser: User = {
			id: Date.now(),
			email: 'somemail@mail.ru',
			password: dto.password,
			avatar: Date.now().toString() + '.jpg',
			login: dto.login,
			nickName: dto.login,
		}
		const token = `wkpdkawrf${Date.now().toString()}kepakr`
		return { ...mockUser, token }
	}
}
