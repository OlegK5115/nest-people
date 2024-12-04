import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize'
import { PEOPLE_TABLE } from '../constans'
import { People } from './people.model'
import { ChangePeopleDto } from './dto/change-people-dto';

@Injectable()
export class PeopleService {
	constructor(@Inject(PEOPLE_TABLE) private peopleRep : typeof People) {}

	async changeProblem(dto : ChangePeopleDto) : Promise<void> {
		await this.peopleRep.update(
			{ problems : false },
			{
				where : {
					name : {
						[Op.like] : dto.name || "%",
					},
					surname : {
						[Op.like] : dto.surname || "%",
					},
					age : {
						[Op.between] : [dto.age || 0, dto.age || 1000]
					},
					male : {
						[Op.like] : dto.male || "%",
					}
				}
			}
		)
	}

	async getCountPeopleByProblem() : Promise<number> {
		return await this.peopleRep.count({
			where : {
				problems : true
			}
		})
	}
}