import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MyButton } from '../../components/Button/Button'

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
				<MyButton />
			</Link>
		</Box>
	)
}
