import { urgencyEnum } from '@/types'
import { capitalizeName } from '@/utils/functions'
import { act } from 'react'

export const OrdersData = [
	{
		id: 1,
		donate_location: 'Hospital Geral de Luanda',
		urgency: 'alta',
		description: 'Paciente necessita de transfusão urgente após acidente de carro.',
		state: 'pendente',
		user_name: 'carlos fernandes',
		gender: 'masculino',
		blood_type: 'O+',
		data: '23 de Agosto de 2024',
	},
	{
		id: 2,
		donate_location: 'Clínica Sagrada Esperança',
		urgency: 'normal',
		description: 'Doação programada para paciente em tratamento de anemia.',
		state: 'pendente',
		user_name: 'Ana Souza',
		gender: 'femenino',
		blood_type: 'A-',
		data: '15 de Maio de 2025',
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
		data: '10 de Julho de 2026',
	},
	{
		id: 4,
		donate_location: 'Centro de Hemoterapia de Luanda',
		urgency: 'alta',
		description: 'Emergência pediátrica requer transfusão imediata.',
		state: 'pendente',
		user_name: 'Patrícia Gomes',
		gender: 'femenino',
		blood_type: 'AB-',
		data: '23 de Agosto de 2024',
	},
	{
		id: 5,
		donate_location: 'Hospital Américo Boavida',
		urgency: 'normal',
		description: 'Reabastecimento de banco de sangue.',
		state: 'cancelado',
		user_name: 'Fernando Lima',
		gender: 'masculino',
		blood_type: 'O-',
		data: '25 de Julho de 2025',
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

export const UserChat = [
	{
		id: null,
		name: 'Luis Silva',
		message: 'Ola, tudo bem?',
		date: '1 min',
		active: true,
	},
	{
		id: null,
		name: 'Ana Souza',
		message: 'Oi, preciso de ajuda',
		date: '5 min',
		active: false,
	},
	{
		id: null,
		name: 'Miguel Oliveira',
		message: 'Estou precisando de doação de sangue',
		date: '10 dia',
		active: true,
	},
	{
		id: null,
		name: 'Patrícia Gomes',
		message: 'Estou precisando de doação de sangue',
		date: '15 sem',
		active: false,
	},
	{
		id: null,
		name: 'Fernando Lima',
		message: 'Estou precisando de doação de sangue',
		date: '2 mês',
		active: true,
	},
	{
		id: null,
		name: 'Carlos Fernandes',
		message: 'Estou precisando de doação de sangue',
		date: '1 ano',
		active: false,
	},
	{
		id: null,
		name: 'Patrícia Gomes',
		message: 'Estou precisando de doação de sangue',
		date: '15 sem',
		active: false,
	},
	{
		id: null,
		name: 'Fernando Lima',
		message: 'Estou precisando de doação de sangue',
		date: '2 mês',
		active: true,
	},
	{
		id: null,
		name: 'Carlos Fernandes',
		message: 'Estou precisando de doação de sangue',
		date: '1 ano',
		active: false,
	},
	{
		id: null,
		name: 'Patrícia Gomes',
		message: 'Estou precisando de doação de sangue',
		date: '15 sem',
		active: false,
	},
	{
		id: null,
		name: 'Fernando Lima',
		message: 'Estou precisando de doação de sangue',
		date: '2 mês',
		active: true,
	},
]
