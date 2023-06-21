import { Input, InputGroup, IconButton, Select, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchForm = ({ getFormValue, getSelectValue }) => {
	return (
		<form style={{ margin: '2rem 0' }}>
			<Stack
				flexDirection={{ base: 'column', md: 'row' }}
				justifyContent='space-between'>
				<InputGroup shadow='md' mb='3rem' width={{ md: '30rem' }}>
					<IconButton
						colorScheme='white'
						color='darkGray'
						aria-label='Search a country'
						size='lg'
						icon={<SearchIcon />}
						position='absolute'
						top='2px'
						left='20px'
					/>

					<Input
						placeholder='Search for a country...'
						px='5em'
						py='1.5em'
						fontWeight='semiBold'
						onChange={getFormValue}
					/>
				</InputGroup>
				<Select
					placeholder='Filter by Region'
					fontWeight='semiBold'
					width={{ md: '13rem' }}
					onChange={evt => getSelectValue(evt.target.value)}>
					<option value='africa'>Africa</option>
					<option value='america'>America</option>
					<option value='asia'>Asia</option>
					<option value='europe'>Europe</option>
					<option value='oceania'>Oceania</option>
				</Select>
			</Stack>
		</form>
	)
}
