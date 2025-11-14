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
                lists = {lists}
                setLists = {setLists} 
                userId = {userId} 
                users = {users}
                show = {show} 
                setShow = {setShow}
            />

            <Card 
                users = {users} 
                userId = {userId} 
                lists = {lists} 
                setLists = {setLists} 
                show = {show} 
                setShow = {setShow} 
                archived = {false}
            />

            <Toggle 
                users = {users} 
                userId = {userId} 
                lists = {lists} 
                setLists = {setLists} 
                show = {show} 
                setShow = {setShow} 
            />
        </>
    )
}

export default Dashboard