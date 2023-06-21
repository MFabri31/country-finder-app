import { useState, useEffect } from 'react'

const BASE_URL = 'https://restcountries.com/v3.1'

export const useCountries = ({ searchValue }) => {
	const [countries, setCountries] = useState([])
	const [loading, setLoading] = useState(null)

	const getCountries = async () => {
		try {
			let endpoint = `${BASE_URL}/all`

			if (searchValue) {
				endpoint = `${BASE_URL}/${searchValue}`
			}

			setLoading(true)
			const response = await fetch(endpoint)
			const countries = await response.json()
			setCountries(countries)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCountries()
	}, [searchValue])

	return {
		countries,
		loading,
	}
}
