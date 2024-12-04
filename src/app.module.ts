import { Module } from '@nestjs/common';
import { PeopleModule } from './people/people.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [PeopleModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
