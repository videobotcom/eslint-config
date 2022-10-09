module.exports = {
	extends: [
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: [
		'*.min.*',
		'*.d.ts',
		'CHANGELOG.md',
		'dist',
		'LICENSE*',
		'output',
		'coverage',
		'public',
		'temp',
		'package-lock.json',
		'pnpm-lock.yaml',
		'yarn.lock',
		'__snapshots__',
		'!.github',
		'!.vitepress',
		'!.vscode',
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	overrides: [
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-duplicates': 'off',
			},
		},
		{
			files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
			rules: {
				'no-unused-expressions': 'off',
			},
		},
	],
	rules: {
		// common
		'camelcase': 'off',
		'comma-dangle': 'off',
		'quote-props': ['error', 'consistent-as-needed'],
		'indent': 'off',
		'object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],

		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
		'no-var': 'error',
		'no-multi-str': 'error',
		'no-multi-spaces': 'error',
		'no-tabs': ['error', { allowIndentationTabs: true }],

		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-template': 'error',

		// typescript
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/func-call-spacing': ['error'],
		'@typescript-eslint/no-empty-interface': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			MemberExpression: 1,
			FunctionDeclaration: { parameters: 1, body: 1 },
			FunctionExpression: { parameters: 1, body: 1 },
			CallExpression: { arguments: 1 },
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoreComments: false,
			ignoredNodes: [
				'TemplateLiteral *',
				'JSXElement',
				'JSXElement > *',
				'JSXAttribute',
				'JSXIdentifier',
				'JSXNamespacedName',
				'JSXMemberExpression',
				'JSXSpreadAttribute',
				'JSXExpressionContainer',
				'JSXOpeningElement',
				'JSXClosingElement',
				'JSXFragment',
				'JSXOpeningFragment',
				'JSXClosingFragment',
				'JSXText',
				'JSXEmptyExpression',
				'JSXSpreadChild',
				'TSTypeParameterInstantiation',
				'FunctionExpression > .params[decorators.length > 0]',
				'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
				'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
			],
			offsetTernaryExpressions: true,
		}],

		// import
		'import/newline-after-import': ['error'],
	},
}
