import { Controller, Get, Post, Body } from '@nestjs/common';
import { PeopleService } from './people.service'
import { ChangePeopleDto } from './dto/change-people-dto';

@Controller('people')
export class PeopleController {
	constructor (private peopleService : PeopleService) {}

	@Get('/count')
	async getCountPeople() {
		return await this.peopleService.getCountPeopleByProblem()
	}

	@Post('change')
	async changePeople(
		@Body() peopleDto: ChangePeopleDto
	) {
		return await this.peopleService.changeProblem(peopleDto)
	}
}