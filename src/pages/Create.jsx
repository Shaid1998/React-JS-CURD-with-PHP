import React, { useEffect, useState } from 'react'
import http from '../http'
import { useNavigate } from 'react-router';

export default function Create(){
  const navigate = useNavigate();
  const [inputs , setInputs] = useState([]);
  const handleChange = (event)=> {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  const SubmitForm = () =>{
    http.post('/users',inputs).then((res)=>{
      navigate('/');
    })
  }
  return(
    <div>
      <h2>New User</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <div className="card p-4">
            <label>Name</label>
            <input type="text" name="name" className="form-control" value={inputs.name || ''} onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="email" className="form-control" value={inputs.email || ''} onChange={handleChange} />

            <label>Password</label>
            <input type="password" name="password" className="form-control" value={inputs.password || ''} onChange={handleChange} />

            <button type="button" onClick={SubmitForm} className="btn btn-info mt-2" >Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}