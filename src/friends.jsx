 import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './fran';

 export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then (data =>setFriends(data))
    },[])
   
    return (
    <div className='box'>
        <h3>Friends:{friends.length}</h3>
        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
    </div>

    )
}

/***
 * 1. state to hold data
 * 2. with effect with dependence array
 * 3. use fetch to lod data
 * 4.  set loaded data to the state
 * 5. display data on the component
 */
