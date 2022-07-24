import classes from './Button.module.css'



const Button = dataProps => {



  return (

<button
 type={ dataProps.type || 'button' }
 className={ `
  ${ classes.button }
  ${ classes.className }
 ` }
 onClick={ dataProps.onClick }
 disabled={ dataProps.disabled }
>



 { dataProps.children }



</button>

  )



}



export default Button
