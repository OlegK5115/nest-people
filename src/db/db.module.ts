import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { DB_SEQUELIZE } from '../constans';
import { People } from '../people/people.model';

const sequelize = {
	provide : DB_SEQUELIZE,
	useFactory : async () => {
		const sequelize = new Sequelize({
			dialect: 'postgres',
        	host: 'localhost',
        	port: 5432,
        	username: 'postgres',
        	password: '1234',
        	database: 'postgres',
		})
		
		sequelize.addModels([ People ])

		await sequelize.sync()

		return sequelize
	}
}

@Module({
	providers : [sequelize]
})
export class DbModule {}