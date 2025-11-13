import Toggle from './toggle-archived';
import Card from './card';
import AddList from './add-list';
import { useState } from 'react'

function Dashboard({ users, shopLists, userId }) {
    const [show, setShow] = useState(false);
    const [lists, setLists] = useState(shopLists);

    return (
        <>
            <AddList 
                setLists = {setLists}
                owner = {userId} 
                users = {users} 
                show = {show} 
                setShow = {setShow}
            />

            {lists.filter((item) => item.archived === false).map((item) => 
                <Card users = {users} shopList = {item} userId = {userId}/>)
            }

            <Toggle lists = {lists}/>
        </>
    )
}

export default Dashboard