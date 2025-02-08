interface NodeRequire {}
export enum GenderEnum {
	female = 'femenino',
	male = 'masculino',
	other = 'outro',
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
	address: string | null
	phone: string | null
	description: string | null
	blood_type_id: number | null
	gender: GenderEnum
}

export type BloodType = {
	name: string
}

export type DonateType = {
	image?: NodeRequire
	fullname: string
	gender: GenderEnum
	blood_type: Pick<BloodType, 'name'>
}

export type notificationType = {
	description: string
	donate_location: string
	id: number
	state: string
	urgency: string
	user: {
		fullname: string
	}
}
