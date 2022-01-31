import { createContext, useState, useEffect } from "react"
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase.config'

export const UserContext = createContext()

export function UserContextProvider(props) {
	// Auth system
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoadingData] = useState(true)

	const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

	// Modal handle
	const [modalState, setModalState] = useState({
		signUp: false,
		signIn: false
	})

	const toggleModals = modal => {
		if (modal === 'signIn') {
			setModalState({
				signUp: false,
				signIn: true
			})
		}
		if (modal === 'signUp') {
			setModalState({
				signUp: true,
				signIn: false
			})
		}
		if (modal === 'close') {
			setModalState({
				signUp: false,
				signIn: false
			})
		}
	}

	return (
		<UserContext.Provider value={{ modalState, toggleModals, signUp }}>
			{props.children}
		</UserContext.Provider>
	)
}