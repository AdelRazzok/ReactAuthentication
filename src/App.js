import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Private from './pages/Private/Private'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'

export default function App() {
	return (
		<>
			<Signup />
			<Signin />
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