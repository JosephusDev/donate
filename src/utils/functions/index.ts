export const formatedName = (name: string) => {
	const names = name.split(' ')
	const firstName = names[0]
	const lastName = names.pop()
	return `${firstName.charAt(0)}${lastName?.charAt(0)}`.trim()
}
