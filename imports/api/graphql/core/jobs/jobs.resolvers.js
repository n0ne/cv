export const jobsResolver = async (root, args, context) => {
	const Jobs = [
		{
			_id: 1,
			from: 'From May 2004',
			to: 'To present time',
			company: 'LLC «Trading House TiD»',
			position: 'Programmer/System adminstrator',
			stack: [
				{
					_id: '11',
					value: 'Full stack development',
				},
				{
					_id: '12',
					value: 'ReactJS(redux, rr4, etc.)',
				},
				{
					_id: '13',
					value: 'GraphQL(Apollo)',
				},
				{
					_id: '14',
					value: 'node.js(Meteor.js)',
				},
				{
					_id: '15',
					value: 'MongoDB',
				},
				{
					_id: '16',
					value: 'RoR',
				},
				{
					_id: '17',
					value: 'java (Android)',
				},
				{
					_id: '18',
					value: 'Linux/FreeBSD administration(mail servers, bind, proxy, etc.)',
				},
			],
		},
		{
			_id: 2,
			from: 'April 2003',
			to: 'April 2004',
			company: 'LLC Novik',
			position: 'Programmer/System adminstrator',
			stack: [
				{
					_id: '21',
					value: 'Linux/FreeBSD administration(mail servers, bind, proxy, etc.)',
				},
				{
					_id: '22',
					value: 'VoIP(Asterisk, TrixBox)',
				},
				{
					_id: '23',
					value: 'All Windows',
				},
				{
					_id: '24',
					value: 'LAMP',
				},
				{
					_id: '25',
					value: 'Delphi',
				},
			],
		},
		{
			_id: 3,
			from: 'June 2003',
			to: 'April 2004',
			company: 'International Commercial Bank',
			position: 'System adminstrator/Programmer',
			stack: [
				{
					_id: '31',
					value: 'Analysis and administration of a bank database(Oracle, MySQL)',
				},
				{
					_id: '32',
					value: 'System administration of electronic payments (Western Union)',
				},
				{
					_id: '33',
					value: 'System administration of email to National Bank of Ukraine',
				},
				{
					_id: '34',
					value: 'Analysis and administration of a bank computer network, repair and adjustment of office equipment',
				},
			],
		},
		{
			_id: 4,
			from: 'February 1999',
			to: 'June 2001',
			company: 'JV with 100% FI «Ukrainian National Lottery»',
			position: 'Electronic engineer',
			stack: [
				{
					_id: '41',
					value: 'Installation and service of 5 base stations on a basis MDS 4790',
				},
				{
					_id: '42',
					value: 'Installation and service of 250 game terminals',
				},
				{
					_id: '43',
					value:
						'Repairing of many different terminals: repair of analog and digital parts of the terminal and adjustment of the mechanical block as well',
				},
				{
					_id: '44',
					value: 'Solution of communication problems with baseline station (X25, RS232)',
				},
			],
		},
		{
			_id: 5,
			from: 'May 1998',
			to: 'February 1999',
			company: 'Private Payphone Company',
			position: 'Hardware/Software Engineer',
			stack: [
				{
					_id: '51',
					value:
						"IBM PC compatibles, FPGA Altera, DAC's and ADC's of firms MAXIM and AD, Atmel microcontrollers, microcircuits Flash memory, MAXIM and AD RS-232 Line, etc.",
				},
				{
					_id: '52',
					value: 'C/C++, Assembler for x86 and Intel c51, VHDL',
				},
				{
					_id: '53',
					value: 'Max Plus II, Or CAD, P-CAD, Micro Cap 2 and 3, PSPICE',
				},
				{
					_id: '54',
					value: 'Development, assembly and adjustment of the telecommunication and telegraphic equipment',
				},
				{
					_id: '55',
					value:
						'Development of internal structure of some parts for Mini-ATE with use of Max Plus II for the subsequent realization in FPGA Altera',
				},
			],
		},
		{
			_id: 6,
			from: 'June 1998',
			to: 'Sept 1998',
			company: 'Art-R',
			position: 'Electronic Engineer',
			stack: [
				{
					_id: '61',
					value:
						'installation, adjustment and repair of the professional musical and light equipment in Odessa night clubs, and as carried out the control of serviceability and management of laser installation in a night club.',
				},
			],
		},
	]

	return Jobs
}
