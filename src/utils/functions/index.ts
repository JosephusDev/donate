export const formatedName = (name: string) => {
	const names = name.split(' ')
	const firstName = names[0]
	const lastName = names.pop()
	return `${firstName.charAt(0)}${lastName?.charAt(0)}`.trim()
}

export const capitalizeName = (name: string) => {
	return name
		.split(' ')
		.map(value => capitalizeText(value))
		.join(' ')
		.trim()
}

export const capitalizeText = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1)
}
