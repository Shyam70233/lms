import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {toast} from 'react-toastify'

const Faculty = () => {
  const a = useSelector(s=>s.faculty)
  const [ob1, setob1] = useState({name:"",email:"",password:"",branch:"",phone:""})
  const [ob2, setob2] = useState({id:0, name:"",email:"",password:"",branch:"",phone:""})
  const dispatch = useDispatch()
  // console.log("test",a)
  const insert = (e) =>{
   console.log("insertData",ob1);
    // setob1({...ob1})
    let payload = [...a, {...ob1, id:a.length+1}]
    dispatch({type:"faculty",payload})
    toast("Added Successfull")
  }
  
  const edit = (x) =>{
    setob2(x)
  }
  const update = (x) =>{
    let payload = a.map(x=>x.id === ob2.id ? ob2 : x)
    dispatch({type:"faculty",payload})
    toast("Updated Successfull")
  }
  const del = (id) =>{
    let payload = a.filter((x,i)=>x.id !== id)
    dispatch({type:"faculty",payload})
    toast("Delete Successfull")
  }

  const handleChnage = (e) =>{
    const {name, value} = e.target;
    setob1({...ob1, [name]:value})
  }
  const handleChnage1 = (e) =>{
    const {name, value} = e.target;
    setob2({...ob2, [name]:value})
  }
  
  return (
    <div className='wrapper'>
        <h2>faculty/faculty</h2>
        <div className='form'>
          <input name='name' placeholder='name' value={ob1.name} onChange={handleChnage}/>
          <input name='email' placeholder='email' value={ob1.email} onChange={handleChnage}/>
          <input name='password' placeholder='password' value={ob1.password} onChange={handleChnage}/>
          <input name='branch' placeholder='branch' value={ob1.branch} onChange={handleChnage}/>
          <input name='phone' placeholder='phone' value={ob1.phone} onChange={handleChnage}/>
          <button onClick={insert}>Insert</button>
        </div>
       {ob2?.id > 0 &&
       
        <div className='form'>
          <h2>Edit Form {ob2.id}</h2>
          <input name='name' value={ob2.name} onChange={handleChnage1}/>
          <input name='email' value={ob2.email} onChange={handleChnage1}/>
          <input name='password' value={ob2.password} onChange={handleChnage1}/>
          <input name='branch' value={ob2.branch} onChange={handleChnage1}/>
          <input name='phone' value={ob2.phone} onChange={handleChnage1}/>
          <button onClick={update}>Update</button>
        </div>
       }
        <h2>Total faculty : {a.length}</h2>
      <div className='overflow'>
      <table cellPadding={10} cellSpacing={0}> 
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Branch</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {a.map(x=>
          
            <tr key={x.id}>
               <td>{x.id}</td>
               <td>{x.name}</td>
               <td>{x.email}</td>
               <td>{x.password}</td>
               <td>{x.branch}</td>
               <td>{x.phone}</td>
               <td>
                <button onClick={(e)=>edit(x)}>Edit</button>
                <button onClick={(e)=>del(x.id)}>Delete</button>
               </td>
          </tr>
            )}
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default Faculty
