import React, { useState } from 'react'

const Bookview = () => {
    const [v,setv]=useState([]);
    const rdbookd=(event)=>{
        fetch("https://store4-c11b5-default-rtdb.firebaseio.com/store.json")
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            // console.log(data);
        console.log(snapshotToArray(data));
        setv(snapshotToArray(data));
        })
            
        }
        function snapshotToArray(snapshot){
            const array=[];
            Object.keys(snapshot).forEach((key)=>{
                array.push(snapshot[key]);

            });
            return array;
        }
    
  return (
    <div>
      <button onClick={rdbookd}>view</button>
      <br></br>
      <br></br>
      <table border="1">
        <tr>
            <th>Bookname</th>
            <th>Author</th>
            <th>Publisher</th>
        </tr>
        {v.map((value,index)=>{
            return(
                <tr key={index}>
                    <td>{value.bookname}</td>
                    <td>{value.author}</td>
                    <td>{value.publisher}</td>
                </tr>
            )
        })}
      </table>
    </div>
  )
}

export default Bookview
