import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { QuotesModule } from './quotes/quotes.module';
import { FeelingsModule } from './feelings/feelings.module';
@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db',
			entities: [join(__dirname, '**', 'entities', '*.entity.{ts,js}')],
			synchronize: true,
		}),
		UserModule,
		QuotesModule,
		FeelingsModule,
	],
})
export class AppModule {}
