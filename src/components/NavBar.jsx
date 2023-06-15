import { Box, Text } from '@chakra-ui/react'

export const NavBar = () => {
	return (
		<Box py='2em' px={{ base: '1em', lg: '5.8em' }} shadow='md'>
			<Text fontSize='lg' fontWeight='extraBold'>
				Where in the world?
			</Text>
		</Box>
	)
}
