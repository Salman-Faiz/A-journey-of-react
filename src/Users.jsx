import { useEffect, useState } from "react"
import SingleUser from "./SingleUser";

export default function Users(){
    const [users, setUsers] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

    return (
        <div>
             <h3>User Name : {users.length}</h3>
             {
                users.map(user =><SingleUser user={user} ></SingleUser>)
             }
        </div>
           
            
    )
}