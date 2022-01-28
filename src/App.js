import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

export default function App() {
	return (
		<>
			<Navbar />
			<Signup />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	)
}