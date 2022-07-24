import {
  createContext,
  useState, 
  useEffect
} from 'react'



const Login = createContext({})

export const LoginContextProvider = dataProps => {



  const [loginStatus, setLoginStatus] = useState(false)



  useEffect(() => {

    if(localStorage.getItem('login_status') === '1') {
      setLoginStatus(true)
    }

  }, [])



  const loginHandler = (email, password) => {

    localStorage.setItem('login_status', '1')
    setLoginStatus(true)

  }

  const logoutHandler = () => {

    localStorage.removeItem('login_status')
    setLoginStatus(false)

  }


  return (

<Login.Provider value={ {
  loginStatus: loginStatus,
  loginHandler: loginHandler,
  logoutHandler: logoutHandler
} }>



 { dataProps.children }



</Login.Provider>

  )



}



export default Login
