import type { FlatConfigItem, OptionsConfig } from '@antfu/eslint-config'
import type { FlatConfigPipeline } from 'eslint-flat-config-utils'
import antfu from '@antfu/eslint-config'

type Options = Omit<OptionsConfig, 'stylistic'> & {
	stylistic?: boolean
}

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never
const suppayami = (
	options: Options = { react: false, vue: false },
	...args: RestParameters<typeof antfu>
): FlatConfigPipeline<FlatConfigItem> =>
	antfu(
		{
			...options,
			stylistic: options?.stylistic === false
				? false
				: { indent: 'tab', jsx: true, quotes: 'single', semi: false },
		},
		{
			rules: {
				'antfu/top-level-function': 'off',
				'curly': ['error', 'all'],
				'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
				'import/order': ['off', {
					alphabetize: { order: 'ignore' },
				}],
				'sort-imports': 'off',
			},
		},
		...args,
	)

export default suppayami

export const reactConfig = (
	options: Omit<Options, 'react'> = {},
	...args: RestParameters<typeof antfu>
) => suppayami({ ...options, react: true }, ...args)

export const vueConfig = (
	options: Omit<Options, 'vue'> = {},
	...args: RestParameters<typeof antfu>
) => suppayami({ ...options, vue: true }, ...args)
