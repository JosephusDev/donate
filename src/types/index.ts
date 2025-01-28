export enum GenderEnum {
	female = 'femenino',
	male = 'masculino',
}

export enum UserTypeEnum {
	individual = 'individual',
	hospital = 'hospital',
}

export type UserType = {
	email: string
	username: string
	password: string
	fullname: string
	state?: boolean
	user_type: UserTypeEnum
	address: string
	phone: string
	description?: string
	blood_type_id: string
	gender: GenderEnum
}
