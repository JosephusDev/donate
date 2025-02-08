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

export enum urgencyEnum {
	high = 'alta',
	medium = 'media',
	normal = 'normal',
}

export enum stateEnum {
	pendente = 'pendente',
	concluído = 'concluído',
	cancelado = 'cancelado',
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
	id: number | null
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

export type OrderType = {
	id: number
	donate_location: string
	urgency: urgencyEnum
	description: string
	state: stateEnum
	user_id: number
	blood_type_id: number
	blood_type: BloodType
}

export interface ISelect {
	id?: number | string | null
	name: string
}
