import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'quotes' })
export class Quote {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	title: string
	@Column()
	image: string
	@Column()
	description: string
}
