export const meResolver = async (root, args, context) => {
	console.log('User info ask')

	const User = {
		_id: '100001908893158',
		firstName: 'Alexander',
		secondName: 'Podkidyshev',
		address: 'Fountain way, 8/7, apt.20, Odessa, Ukraine, 65009',
		cell: '+380679394979',
		skype: 'podkidyshev.alexander',
		DOB: '10.06.1976',
		martialStatus: true,
		children: 'daughter',
		drivingLicense: 'B',
		characteristics: [
			'Ability to concentrate on achieving goals',
			'Over 20 years of confirmed successful experience in the IT sector',
			'Independent, resourceful and detail-oriented individual, able to quickly grasp new technology',
		],
	}

	return User
}
