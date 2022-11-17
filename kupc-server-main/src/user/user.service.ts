import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LoginDTO } from './dto/login.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
	 users:User[] = [
		{
			id: 1,
			email: 'vasya@mail.com',
			password: 'qwerty',
			nickName: 'vasya',
			login: 'vasya123'
		},
		{
			id: 2,
			email: 'kolya@mail.com',
			password: 'kolyA111',
			nickName: 'kolya',
			login: 'kolya345'
		},
		{
			id: 3,
			email: 'artyom@mail.com',
			password: 'Arti780',
			nickName: 'artyom',
			login: 'artyom777'
		}
	]
	async login(dto: LoginDTO) {
		if (this.users.find(u => dto.email === u.email && dto.password === u.password)) {
			const user:User = this.users.find(u => dto.email === u.email)
			return user
		} else {
			throw new Error('user not found')
		}
	}
}
