export const Countries = ({ t }) => [
	{
		value: '',
		hidden: true,
		placeholder: true,
		name: t('auth.register.countrySelection'),
	},
	{ value: 'argentina', name: t('auth.register.country1') },
	{ value: 'us', name: t('auth.register.country2') },
	{ value: 'mexico', name: t('auth.register.country3') },
];
