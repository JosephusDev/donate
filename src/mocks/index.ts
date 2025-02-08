import { urgencyEnum } from '@/types'
import { capitalizeName } from '@/utils/functions'

export const OrdersData = [
	{
		id: 1,
		donate_location: 'Hospital Geral de Luanda',
		urgency: 'alta',
		description: 'Paciente necessita de transfusão urgente após acidente de carro.',
		state: 'pendente',
		user_name: 'carlos fernandes',
		gender: 'masculino',
		image: require('@/assets/images/male1.jpg'),
		blood_type: 'O+',
	},
	{
		id: 2,
		donate_location: 'Clínica Sagrada Esperança',
		urgency: 'normal',
		description: 'Doação programada para paciente em tratamento de anemia.',
		state: 'pendente',
		user_name: 'Ana Souza',
		gender: 'femenino',
		image: require('@/assets/images/female1.jpeg'),
		blood_type: 'A-',
	},
	{
		id: 3,
		donate_location: 'Hospital Militar',
		urgency: 'media',
		description: 'Necessidade de sangue para cirurgia programada.',
		state: 'concluído',
		user_name: 'Miguel Oliveira',
		gender: 'masculino',
		blood_type: 'B+',
	},
	{
		id: 4,
		donate_location: 'Centro de Hemoterapia de Luanda',
		urgency: 'alta',
		description: 'Emergência pediátrica requer transfusão imediata.',
		state: 'pendente',
		user_name: 'Patrícia Gomes',
		gender: 'femenino',
		image: require('@/assets/images/female2.jpeg'),
		blood_type: 'AB-',
	},
	{
		id: 5,
		donate_location: 'Hospital Américo Boavida',
		urgency: 'normal',
		description: 'Reabastecimento de banco de sangue.',
		state: 'cancelado',
		user_name: 'Fernando Lima',
		gender: 'masculino',
		image: require('@/assets/images/male3.jpeg'),
		blood_type: 'O-',
	},
]

export const NotificationsData = [
	{
		id: 1,
		title: 'Solicitação de doação',
		message: OrdersData[0].user_name + ' Necessita de doação de sangue.',
		date: '05 de Março de 2023',
	},
	{
		id: 2,
		title: 'Solicitação de doação',
		message: OrdersData[2].user_name + ' Necessita de doação de sangue.',
		date: '20 de Novembro de 2024',
	},
]

export const UrgencyType = [
	{
		id: null,
		name: 'Selecione o tipo de urgência',
	},
	{
		id: urgencyEnum.high,
		name: capitalizeName(urgencyEnum.high),
	},
	{
		id: urgencyEnum.medium,
		name: capitalizeName(urgencyEnum.medium),
	},
	{
		id: urgencyEnum.normal,
		name: capitalizeName(urgencyEnum.normal),
	},
]
