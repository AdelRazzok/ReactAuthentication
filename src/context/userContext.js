import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserContextProvider(props) {
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
		<UserContext.Provider value={{ modalState, toggleModals }}>
			{props.children}
		</UserContext.Provider>
	)
}