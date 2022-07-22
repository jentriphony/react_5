import classes from './Login.module.css'

import { useState, useEffect } from 'react'
import Card from './../UI/Card/Card'
import Button from './../UI/Button/Button'



const Login = dataProps => {



	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailStatus, setEmailStatus] = useState()
	const [passwordStatus, setPasswordStatus] = useState()
 	const [formStatus, setFormStatus] = useState(false)



	useEffect(() => {
		const timer = setTimeout(() => {
			setFormStatus(/.@./.test(email) && password.trim().length > 6)
		}, 1024)
		return () => clearTimeout(timer)
	}, [email, password])



	const emailHandler = event => {

		setEmail(event.target.value)

	}

	const passwordHandler = event => {

		setPassword(event.target.value)

	}

	const validateEmail = () => {

		setEmailStatus(/.@./.test(email))

	}

	const validatePassword = () => {

		setPasswordStatus(password.trim().length > 6)

	}

	const onSubmit = event => {

		event.preventDefault()

		dataProps.onLogin(email, password)

	}


	return (

<Card className={ classes.login }>



 <form onSubmit={ onSubmit }>
  <div
   className={ `
    ${ classes.control }
    ${ emailStatus === false ? classes.invalid : '' }
   ` }
  >
   <label htmlFor='email'>
    email
   </label>

   <input
    type='email'
    id='email'
    value={ email }
    onInput={ emailHandler }
    onBlur={ validateEmail }
   />
  </div>

  <div
   className={ `
    ${ classes.control }
    ${ passwordStatus === false ? classes.invalid : '' }
   ` }
  >
   <label htmlFor='password'>
    password
   </label>

   <input
    type='password'
    id='password'
    value={ password }
    onInput={ passwordHandler }
    onBlur={ validatePassword }
   />
  </div>

  <div className={ classes.actions }>
   <Button
    type='submit'
    className={ classes.btn }
    disabled={ !formStatus }
   >
    login
   </Button>
  </div>
 </form>



</Card>

	)



}



export default Login
