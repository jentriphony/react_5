import classes from './MainHeader.module.css'

import NavBar from './NavBar'



const MainHeader = dataProps => {



	return (

<header className={ classes['main-header'] }>



 <h1>header</h1>

 <NavBar loginStatus={ dataProps.loginStatus } onLogout={ dataProps.onLogout } />



</header>

	)



}



export default MainHeader
