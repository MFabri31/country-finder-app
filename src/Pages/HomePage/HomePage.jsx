import { useState } from 'react'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { useEffect } from 'react'
import {
	SimpleGrid,
	Card,
	Image,
	CardBody,
	Heading,
	Text,
} from '@chakra-ui/react'

const BASE_URL = 'https://restcountries.com/v3.1'

export const HomePage = () => {
	const [countries, setCountries] = useState([])

	const getCountries = async () => {
		try {
			const response = await fetch(`${BASE_URL}/all`)
			const countries = await response.json()
			console.log(countries)
			setCountries(countries)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCountries()
	}, [])

	return (
		<>
			<SearchForm />
			<SimpleGrid columns={{ md: '4' }} gap={10}>
				{countries.map(country => (
					<Card
						mb='1rem'
						maxW='sm'
						key={country.id}
						shadow='md'
						borderRadius='8px'>
						<Image
							src={country.flags.svg}
							borderTopRadius='8px'
							alt={country.flags.alt}
						/>
						<CardBody>
							<Heading as='h3' size='lg'>
								{country.name.common}
							</Heading>
							<Text>Population:{country.population}</Text>
							<Text>Region: {country.region}</Text>
							<Text>Capital: {country.capital}</Text>
						</CardBody>
					</Card>
				))}
			</SimpleGrid>
		</>
	)
}
