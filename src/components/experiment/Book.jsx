import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Book = () => {
    const [w,cn]=useState('');
    const [x,d]=useState('');
    const [y,fa]=useState('');
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
    const checkfilldata=(event)=>{
        event.preventDefault();
        if(w.trim()===''||x.trim()===''||y.trim()==='')
        {
        setError(true);

      return;
        }
        else{
            setError(false);
            const myobj={
                bookname:w,
                author:x,
                publisher:y
            }
            fetch("https://store4-c11b5-default-rtdb.firebaseio.com/store.json",
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
    <div>
        <h4>Book Details</h4>
       <form>
       <TextField id="standard-basic" label="Book Name" color="secondary"  onChange={rdbn}/><br/><br/>
      <TextField id="standard-basic" label="Author:" color="secondary" onChange={rdau}/><br/><br/>
      <TextField id="standard-basic" label="Publisher: " color="secondary"  onChange={rdpu}/><br/><br/>
      <Button color="secondary" onClick={checkfilldata}>SAVE</Button>
      {error && 'Please fill the data'}
      </form>
    </div>
  )
}

export default Book
