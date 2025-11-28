import Toggle from './toggle-archived';
import AddList from './add-list';
import { useState } from 'react'

function Dashboard({ users, shopLists, userId }) {

    //data? data : shopLists
    //backend list, provider
    //handleList(userId)
    const [lists, setLists] = useState(shopLists);

    const [show, setShow] = useState(false);
    const [listId, setListId] = useState(null);

    return (
        <>
            <div style = {{background: "beige", fontSize: '40px', paddingTop: '10px', paddingBottom: '5px', paddingLeft: "10px"}}>
                <p>Sopping List</p>
            </div>

            <AddList
                userId = {userId}
                users = {users}

                lists = {lists}
                setLists = {setLists}

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