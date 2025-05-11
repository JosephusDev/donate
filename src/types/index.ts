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
	id: number
	email: string
	username: string
	password: string
	fullname: string
	state?: boolean
	user_type: UserTypeEnum
	address: string | null
	phone: string | null
	description: string | null
	blood_type_id: number | string | null
	gender: GenderEnum
}

export type BloodType = {
	id: number
	name: string
}

export type DonateType = {
	id: number
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
	user: Pick<UserType, 'id' | 'fullname'>
}

export type OrderType = {
	id: number
	donate_location: string
	urgency: urgencyEnum
	description: string
	state: stateEnum
	user_id: number
	blood_type_id: number
	date: Date
	user: Pick<UserType, 'fullname'>
	blood_type: Pick<BloodType, 'name'>
}

export type ISelect = {
	id: number | string
	name: string
}

export type MessageType = {
	id?: number
	user_id_from: number
	user_id_to: number
	message: string
	user1?: Pick<UserType, 'fullname'>
	user2?: Pick<UserType, 'fullname'>
}
