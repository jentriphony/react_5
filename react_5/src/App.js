import { useContext, Fragment } from 'react'
import LoginContext from './context/login'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'



function App() {



  const loginContext = useContext(LoginContext)
  const loginStatus = loginContext.loginStatus


  return (

<Fragment>



 <MainHeader />

 <main>
  { !loginStatus && (
  <Login onLogin={ loginContext.loginHandler } />
  ) }

  { loginStatus && (
  <Home />
  ) }
 </main>



</Fragment>

  )



}

export default App
