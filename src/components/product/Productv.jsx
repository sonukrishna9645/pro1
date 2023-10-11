import React, { useState } from 'react'

const Productv = () => {
    const [v,setv]=useState([]);
    const rdbookd=(event)=>{
        fetch("https://prj1-210f7-default-rtdb.firebaseio.com/store.json")
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
      <div>
      <button onClick={rdbookd}>view</button>
      <br></br>
      <br></br>
      <table border="1">
        <tr>
            <th>P_id</th>
            <th>P_name</th>
            <th>P_price</th>
            <th>P_model</th>
        </tr>
        {v.map((value,index)=>{
            return(
                <tr key={index}>
                    <td>{value.pid}</td>
                    <td>{value.pname}</td>
                    <td>{value.pprice}</td>
                    <td>{value.pmodel}</td>
                </tr>
            )
        })}
      </table>
    </div>
    </div>
  )
}

export default Productv
