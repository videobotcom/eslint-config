module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'@suppayami/eslint-config-basic',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'jsx-quotes': [
			'error',
			'prefer-double',
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-indent': ['error', 'tab', { checkAttributes: true }],
		'react/jsx-indent-props': ['error', 'tab'],
	},
}
