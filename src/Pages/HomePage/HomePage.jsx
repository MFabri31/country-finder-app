import { SearchForm } from '../../components/SearchForm/SearchForm'

import {
	SimpleGrid,
	Card,
	Image,
	CardBody,
	Heading,
	Text,
} from '@chakra-ui/react'
import { useSearchForm } from '../../hooks/useSearchForm'
import { useCountries } from '../../hooks/useCountries'
import { Loader } from '../../components/Loader/Loader'

export const HomePage = () => {
	const { searchValue, getFormValue } = useSearchForm()

	const { countries, loading } = useCountries({ searchValue })

	return (
		<>
			<SearchForm getFormValue={getFormValue} />

			{loading && <Loader />}

			<SimpleGrid columns={{ md: '4' }} gap={10}>
				{countries?.map(country => (
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
