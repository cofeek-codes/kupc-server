import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'feelings' })
export class Feeling {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	title: string
	@Column()
	image: string
	@Column()
	position: number
}
