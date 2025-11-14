import Toggle from './toggle-archived';
import AddList from './add-list';
import { useState } from 'react'
import Cards from './card';

function Dashboard({ users, shopLists, userId }) {
    const [show, setShow] = useState(false);
    const [lists, setLists] = useState(shopLists);
    const [modalId, setModalId] = useState(null);

    return (
        <>
            <AddList
                lists = {lists}
                setLists = {setLists} 
                userId = {userId} 
                users = {users}
                show = {show} 
                setShow = {setShow}
                modalId = {modalId}
                setModalId = {setModalId}
            />

            <Cards 
                users = {users} 
                userId = {userId} 
                lists = {lists} 
                setLists = {setLists} 
                show = {show} 
                setShow = {setShow} 
                archived = {false}
                modalId = {modalId}
                setModalId = {setModalId}
            />

            <Toggle 
                users = {users} 
                userId = {userId} 
                lists = {lists} 
                setLists = {setLists} 
                show = {show} 
                setShow = {setShow} 
                modalId = {modalId} 
                setModalId = {setModalId}
            />
        </>
    )
}

export default Dashboard