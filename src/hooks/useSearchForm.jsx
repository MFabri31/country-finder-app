import { useState } from 'react'

export const useSearchForm = () => {
	const [searchValue, setSearchValue] = useState(null)

	const getFormValue = evt => setSearchValue(evt.target.value)

	return {
		searchValue,
		getFormValue,
	}
}
