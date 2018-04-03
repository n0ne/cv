export const eduResolver = async (root, args, context) => {
	const Edu = [
		{
			_id: 1,
			from: '2005',
			to: '2007',
			info: 'Odessa National Academy of Law, specialty «Civil law and Enterprise»',
		},
		{
			_id: 2,
			from: '1993',
			to: '1998',
			info:
				'Master’s degree in Electrical engineering, faculty of Automatics and computer facilities, Odessa State polytechnic University.',
		},
		{
			_id: 3,
			from: '1991',
			to: '1993',
			info: 'High school in Odessa graduated with honors.',
		},
	]

	return Edu
}
