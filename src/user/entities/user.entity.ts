import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	nickName: string
	@Column()
	email: string
	@Column()
	login: string

	@Column()
	password: string
}
