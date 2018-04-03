export const extraResolver = async (root, args, context) => {
	const Extra = {
		_id: 1,
		lang: ['Russian', 'Ukrainian', 'English'],
		strong: ['Purposefulness', 'straight dealing', 'managerial abilities'],
		weak: ['Straightforwardness', 'taciturnity', 'habit of thinking', 'introvert', "don't like tests"],
		interests: ['sport', 'extreme sport', 'braine games', 'psychology', 'music'],
	}

	return Extra
}
