import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				fontFamily: 'Nunito Sans',
				bg: '#fafafa',
				color: '#111517',
			},
		},
	},

	colors: {
		darkGray: '	#858585',
		white: '#fff',
	},
	fontWeights: {
		light: 300,
		semiBold: 600,
		extraBold: 800,
	},
})
