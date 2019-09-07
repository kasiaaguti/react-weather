import React from 'react'


const Form = props => {
  return (
    <form onSubmit={props.submit}>
<input
type="text"
onChange={props.change}
placeholder="city"
/>

<button> find </button>
    </form>
  )

}



export default Form
