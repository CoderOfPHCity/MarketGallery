import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {ReactComponent as ArrowRightIcon} from '../../assets/svg/keyboardArrowRightIcon.svg'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";



function ForgotPass() {

    const [email, setEmail] = useState('')

    const onChange = (e) =>{
        setEmail(e.target.value)

   } 
   const onSubmit = (e) =>{
       e.preventDefault()
       const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
            toast.success('Password reset email sent!')
    // ..
            })
            .catch((error) => {
             toast.error('Could not send reset email')
    // ..
  });
} 
    



  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link className='forgotPasswordLink' to='/sign-in'>
            Sign In
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPass