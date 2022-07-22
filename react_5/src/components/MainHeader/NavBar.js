import classes from './NavBar.module.css'



const NavBar = dataProps => {



	const loginStatus = dataProps.loginStatus


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
   <button onClick={ dataProps.onLogout }>
    logout
   </button>
  </li>
  ) }
 </ul>



</nav>

	)



}



export default NavBar
