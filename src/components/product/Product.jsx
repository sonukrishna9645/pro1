import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Product = () => {
    const [q,cn]=useState('');
    const [r,d]=useState('');
    const [s,fa]=useState('');
    const [t,va]=useState('');
    const [error,setError]=useState(false);

    const rdbn=(event)=>{
        console.log(event.target.value);
         cn(event.target.value);
    }
    const rdau=(event)=>{
        console.log(event.target.value);
    d(event.target.value);
    }
    const rdpu=(event)=>{
        console.log(event.target.value);
    fa(event.target.value);
    }
    const rdpm=(event)=>{
        console.log(event.target.value);
    va(event.target.value);
    }
    const checkfilldata=(event)=>{
        event.preventDefault();
        if(q.trim()===''||r.trim()===''||s.trim()===''||t.trim()==='')
        {
        setError(true);

      return;
        }
        else{
            setError(false);
            const myobj={
                pid:q,
                pname:r,
                pprice:s,
                pmodel:t
            }
            fetch("https://prj1-210f7-default-rtdb.firebaseio.com/store.json",
            {
            method:"POST",
            body:JSON.stringify(myobj),
            headers:{"content-Type":"application/json"}
        }
            );
            alert("record saved")
            }
        
    }
  return (
    
    <div className='p1'>
        <br></br>
   <TextField label="Product Id" variant="filled" color="success" onChange={rdbn} /><br></br><br></br>
   <TextField label="Product Name" variant="filled" color="success"  onChange={rdau}/><br></br><br></br>
   <TextField label="Product Price" variant="filled" color="success" onChange={rdpu} /><br></br><br></br>
   <TextField label="Product Model" variant="filled" color="success" onChange={rdpm} /><br></br><br></br>
   <Button variant="outlined" color="error" onClick={checkfilldata}>Submit</Button>
    </div>
  )
}

export default Product
