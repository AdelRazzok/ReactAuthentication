import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'

export default function Navbar() {
	const { toggleModals } = useContext(UserContext)
	const navigate = useNavigate()

	const logout = async () => {
		try {
			await signOut(auth)
			navigate('/')
		} catch {
			window.alert('Log out error. Please check your internet connection and retry.')
		}
	}

	return(
		<div>
			<nav className="navbar navbar-light bg-light px-4">
				<Link to='/' className='navbar-brand'>
					ReactJS Auth
				</Link>

				<div>
					<button onClick={() => toggleModals('signUp')} className="btn btn-primary">
						Sign Up
					</button>

					<button onClick={() => toggleModals('signIn')} className="btn btn-primary ms-2">
						Sign In
					</button>

					<button
						className="btn btn-danger ms-2"
						onClick={logout}
					>
						Log out
					</button>
				</div>
			</nav>
		</div>
	)
}