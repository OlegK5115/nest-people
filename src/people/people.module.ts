import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { People } from './people.model'
import { PEOPLE_TABLE } from 'src/constans';

const peopleProvider = {
	provide : PEOPLE_TABLE,
	useValue : People
}

@Module({
  providers: [PeopleService, peopleProvider],
  controllers: [PeopleController],
})
export class PeopleModule {}
