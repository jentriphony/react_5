import {
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react'



const Input = forwardRef((dataProps, ref) => {



  const inputRef = useRef()
  const focus = () => {
    inputRef.current.focus()
  }
  useImperativeHandle(ref, () => {
    return { focus: focus }
  })



  return (

<div className={ dataProps.className }>



 <label htmlFor={ dataProps.id }>
  { dataProps.labelInnerText }
 </label>

 <input
  type={ dataProps.type }
  id={ dataProps.id }
  value={ dataProps.value }
  onInput={ dataProps.onInput }
  onBlur={ dataProps.onBlur }
  ref={ inputRef }
 />



</div>


  )



})



export default Input
