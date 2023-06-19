import { Box, Spinner } from '@chakra-ui/react'

export const Loader = () => {
	return (
		<Box py='1em' textAlign='center'>
			<Spinner />
		</Box>
	)
}
