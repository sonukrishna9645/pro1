import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Course = () => {
    const [w,cn]=useState('');
    const [x,d]=useState('');
    const [y,fa]=useState('');

    const rdcn=(event)=>{
        console.log(event.target.value);
    cn(event.target.value);
    }
    const rdd=(event)=>{
        console.log(event.target.value);
    d(event.target.value);
    }
    const rdfa=(event)=>{
        console.log(event.target.value);
    fa(event.target.value);
    }
  return (
    
    <div>
       <h4> <b>Student Details</b></h4>
        <form>
      <TextField id="standard-basic" label="Course name" variant="standard" onChange={rdcn}/><br/><br/>
      <TextField id="standard-basic" label="Duration" variant="standard" onChange={rdd}/><br/><br/>
      <TextField id="standard-basic" label="Fee amount" variant="standard" onChange={rdfa} /><br/><br/>
      <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Course
