import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

export default function Signup() {
	const { modalState, toggleModals } = useContext(UserContext)

	return (
		<>
			{ modalState.signUp && (
			<div className="position-fixed top-0 vw-100 vh-100">
				<div className="w-100 h-100 bg-dark bg-opacity-75">
					<div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Sign up</h5>
									<div className="btn-close"></div>
								</div>
								<div className="modal-body">
									<form className="sign-up-form">
										<div className="mb-3">
											<label htmlFor="signUpEmail" className='form-label'>Email adress</label>
											<input
												type='email'
												name='email' 
												className='form-control'
												required
												id='signUpEmail'
											/>
										</div>

										<div className="mb-3">
											<label htmlFor="signUpPwd" className='form-label'>Password</label>
											<input
												type='password'
												name='pwd'
												className='form-control'
												required
												id='signUpPwd'
											/>
										</div>

										<div className="mb-3">
											<label htmlFor="repeatPwd" className='form-label'>Repeat Password</label>
											<input
												type='password'
												name='pwd'
												className='form-control'
												required
												id='repeatPwd'
											/>
											<p className='text-danger mt-1'></p>
										</div>

										<button className="btn btn-primary mt-2">Submit</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)}
		</>
	)
}