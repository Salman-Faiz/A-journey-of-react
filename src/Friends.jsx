import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const [friends,setFriends] = useState([])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
        
   
    },[])
    return (
        <div className="friendsCss">
            <h3>Total data {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}