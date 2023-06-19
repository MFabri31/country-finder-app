import { useState, useEffect } from 'react'

const BASE_URL = 'https://restcountries.com/v3.1'

export const useCountries = ({ searchValue }) => {
	const [countries, setCountries] = useState([])

	const getCountries = async () => {
		try {
			let endpoint = `${BASE_URL}/all`

			if (searchValue) {
				endpoint = `${BASE_URL}/name/${searchValue}`
			}

			const response = await fetch(endpoint)
			const countries = await response.json()
			// console.log(countries)
			setCountries(countries)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCountries()
	}, [searchValue])

	return {
		countries,
	}
}
