import { Container } from '@chakra-ui/react'

export const Layout = ({ children }) => {
	return (
		<>
			<Container maxW='1200px'>{children}</Container>
		</>
	)
}
