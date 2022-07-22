import { useState, Fragment, useEffect } from 'react'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'



function App() {



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

<Fragment>



 <MainHeader loginStatus={ loginStatus } onLogout={ logoutHandler } />

 <main>
  { !loginStatus && (
  <Login onLogin={ loginHandler } />
  ) }

  { loginStatus && (
  <Home onLogout={ logoutHandler } />
  ) }
 </main>



</Fragment>

  )



}

export default App
