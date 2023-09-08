import React, { useEffect, useState } from 'react'
import http from '../http'
export default function Home() {
    const [users , setUsers] = useState([]);
    useEffect(()=>{
        fetchAllUsers();
    },[])

    const fetchAllUsers=()=>{
        http.get('users').then(res=>{
            setUsers(res.data);
        })
    }
    return (
        <div>
            <h1>Table Listing </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users,index)=>
                        <tr key={users.id}>
                            <td>{++index}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>edit</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}

