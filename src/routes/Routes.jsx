import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { HomePage } from '../Pages/HomePage/HomePage'
import { Layout } from '../components/Layout/Layout'
import CountryPage from '../Pages/CountryPage/CountryPage'
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage'

export const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='country/:name' element={<CountryPage />} />
						<Route path='*' element={<ErrorPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	)
}
