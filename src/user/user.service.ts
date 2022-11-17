import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LoginDTO } from './dto/login.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
	 users:User[] = [{
		id:1,
		email:'vasya@mail.com',
		password:'qwerty',
		login:'vasya',
	nickName: 'vasya123'
	},
	{
		id:2,
		email:'kolya@mail.com',
		password:'kolya123',
		login:'kolyan',
	nickName: 'kolya345'
	},
	{
		id:3,
		email:'artyom@mail.com',
		password:'art678',
		login:'art777',
	nickName: 'artemii'
	}
]
	async login(dto: LoginDTO) {
		console.log(dto)
		const user = this.users.find(u => u.email === dto.email && u.password === dto.password)
if (user) {
return user
}
else {
throw new BadRequestException('user not found')
}
	}
}
