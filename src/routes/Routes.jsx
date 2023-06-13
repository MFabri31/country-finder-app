import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { HomePage } from '../Pages/HomePage/HomePage'

export const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='country/:id' element={<div>Country Page</div>} />
					<Route path='*' element={<div>Page not found!</div>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
