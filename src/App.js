import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Private from './pages/Private/Private'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'

export default function App() {
	return (
		<>
			<Signup />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/private' element={<Private />}>
					<Route path='/private/private-home' element={<PrivateHome />} />
				</Route>
			</Routes>
		</>
	)
}