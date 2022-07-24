import classes from './Login.module.css'

import {
  useState,
  useEffect,
  useReducer,
  useRef
} from 'react'
import Card from './../UI/Card/Card'
import Input from './../UI/Input/Input'
import Button from './../UI/Button/Button'


/*
  emailReducer
*/
const emailReducer = (previousState, action) => {

  if(action.type === 'USER_ON_INPUT_EMAIL') {
    return {
      value: action.value,
      statusVisual: previousState.statusVisual
    }
  }

  if(action.type === 'USER_ON_BLUR_EMAIL') {
    const value = previousState.value
    return {
      value: value,
      statusVisual: /.@./.test(value)
    }
  }

}
// end emailReducer

/*
  passwordReducer
*/
const passwordReducer = (previousState, action) => {

  if(action.type === 'USER_ON_INPUT_PASSWORD') {
    return {
      value: action.value,
      statusVisual: previousState.statusVisual
    }
  }

  if(action.type === 'USER_ON_BLUR_PASSWORD') {
    const value = previousState.value
    return {
      value: value,
      statusVisual: value.trim().length > 6
    }
  }

}
// end passwordReducer

/*
  default
*/
const Login = dataProps => {



  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    statusVisual: null
  })
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    statusVisual: null
  })
  const emailRef = useRef()
  const passwordRef = useRef()
  const [formStatus, setFormStatus] = useState(false)
  const { value: emailValue } = email
  const { value: passwordValue } = password



  useEffect(() => {

    if(/.@./.test(emailValue) && passwordValue.trim().length > 6) {
      setFormStatus(true)
    } else {
      if(formStatus === true) {
	setFormStatus(false)
      }
    }

  }, [emailValue, passwordValue, formStatus])



  const emailHandler = event => {

    dispatchEmail({
      type: 'USER_ON_INPUT_EMAIL',
      value: event.target.value
    })

  }

  const passwordHandler = event => {

    dispatchPassword({
      type: 'USER_ON_INPUT_PASSWORD',
      value: event.target.value
    })

  }

  const validateEmail = () => {

    dispatchEmail({
      type: 'USER_ON_BLUR_EMAIL',
    })

  }

  const validatePassword = () => {

    dispatchPassword({
      type: 'USER_ON_BLUR_PASSWORD',
    })

  }

  const onSubmit = event => {

    event.preventDefault()

    if(formStatus === true) {
      dataProps.onLogin(email.value, password.value)
    } else {
      if(email.status === false) {
	emailRef.current.focus()
	return
      }
      passwordRef.current.focus()
    }

  }


  return (

<Card className={ classes.login }>



 <form onSubmit={ onSubmit }>
  <Input
   labelFor='email'
   labelInnerText='email'
   type='email'
   id='email'
   value={ email.value }
   onInput={ emailHandler }
   onBlur={ validateEmail }
   className={ `
    ${ classes.control }
    ${ email.statusVisual === false ? classes.invalid : '' }
   ` }
   ref={ emailRef }
  />

  <Input
   labelFor='password'
   labelInnerText='password'
   type='password'
   id='password'
   value={ password.value }
   onInput={ passwordHandler }
   onBlur={ validatePassword }
   className={ `
    ${ classes.control }
    ${ password.statusVisual === false ? classes.invalid : '' }
   ` }
   ref={ passwordRef }
  />

  <div className={ classes.actions }>
   <Button
    type='submit'
    className={ classes.btn }
   >
    login
   </Button>
  </div>
 </form>



</Card>

	)



}



export default Login
