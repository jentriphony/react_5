import classes from './NavBar.module.css'

import { useContext } from 'react'
import LoginContext from './../../context/login'



const NavBar = () => {



  const loginContext = useContext(LoginContext)
  const loginStatus = loginContext.loginStatus


  return (



<nav className={ classes['nav-bar'] }>
 <ul>
  { loginStatus && (
  <li>
   <a href='/'>
    list
   </a>
  </li>
  ) }

  { loginStatus && (
  <li>
   <a href='/'>
    admin
   </a>
  </li>
  ) }

  { loginStatus && (
  <li>
   <button onClick={ loginContext.logoutHandler }>
    logout
   </button>
  </li>
  ) }
 </ul>



</nav>

  )



}



export default NavBar
