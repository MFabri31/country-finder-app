import { Box, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const ErrorPage = () => {
	return (
		<Box textAlign='center' my='5em'>
			<Heading as='h3' size='3xl'>
				Oops!
			</Heading>
			<Heading as='h1' my='1rem'>
				Page not found
			</Heading>
			<Link to='/'>
				<Button my='2rem' px='2em' shadow='md' bg='white'>
					<ArrowBackIcon marginRight='1em' />
					Back
				</Button>
			</Link>
		</Box>
	)
}
