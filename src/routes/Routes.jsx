import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<div>Home Page</div>} />
					<Route path='country/:id' element={<div>Country Page</div>} />
					<Route path='*' element={<div>Page not found!</div>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
