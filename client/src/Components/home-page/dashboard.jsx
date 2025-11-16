import Toggle from './toggle-archived';
import AddList from './add-list';
import { useState } from 'react'

function Dashboard({ users, shopLists, userId }) {
    const [lists, setLists] = useState(shopLists);
    const [show, setShow] = useState(false);
    const [listId, setListId] = useState(null);
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
                listId = {listId}
                setListId = {setListId}
            />

            <Toggle 
                users = {users} 
                userId = {userId} 
                lists = {lists} 
                setLists = {setLists}
                show = {show}
                setShow = {setShow}
                listId = {listId}
                setListId = {setListId}
            />

            <div style = {{marginBottom: '50px'}}></div>
        </>
    )
}

export default Dashboard