import Toggle from './toggle-archived';
import AddList from './add-list';
import { useState } from 'react'
import Cards from './card';

function Dashboard({ users, shopLists, userId }) {
    const [lists, setLists] = useState(shopLists);
    const [show, setShow] = useState(false);
    console.log(show);

    return (
        <>
            <div style = {{background: "beige", fontSize: '40px', paddingTop: '10px', paddingBottom: '5px', paddingLeft: "10px"}}>
                <p>Sopping List</p>
            </div>

            <AddList
                lists = {lists}
                setLists = {setLists} 
                userId = {userId} 
                users = {users}
                show = {show}
                setShow = {setShow}
            />

            <Cards 
                users = {users} 
                userId = {userId} 
                lists = {lists} 
                setLists = {setLists} 
                archived = {false}
                show = {show}
                setShow = {setShow}
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