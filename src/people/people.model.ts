import { Model, Table, Column, DataType} from "sequelize-typescript";

interface PeopleCreationAttrs {
	name : string,
	surname : string,
	age : number,
	male : string,
	problems : boolean
}

@Table({tableName : 'people'})
export class People extends Model<People, PeopleCreationAttrs> {
	@Column({type: DataType.INTEGER, unique: true, autoIncrement: true,primaryKey: true})
	id: number

	@Column({type: DataType.STRING, allowNull: false})
	name : string

	@Column({type: DataType.STRING, allowNull: false})
	surname : string

	@Column({type: DataType.INTEGER, allowNull: false})
	age : number

	@Column({type: DataType.STRING, allowNull: false})
	male : string

	@Column({type: DataType.BOOLEAN, allowNull: false})
	problems : boolean
}