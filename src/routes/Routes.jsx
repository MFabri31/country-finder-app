import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { HomePage } from '../Pages/HomePage/HomePage'
import { Layout } from '../components/Layout/Layout'

export const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='country/:id' element={<div>Country Page</div>} />
						<Route path='*' element={<div>Page not found!</div>} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	)
}
