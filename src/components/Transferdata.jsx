import React from 'react'

const Transferdata = (props) => {
  return (
    <div>
    <h1 className='aa'>Welcome</h1>
    Usertype:&nbsp;{props.usertype}<br/><br/>
   Username:&nbsp;{props.username}<br/><br/>
   Password:&nbsp;{props.password}

    </div>
  )
}

export default Transferdata