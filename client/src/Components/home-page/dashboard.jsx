import Toggle from './toggle-archived';
import MockupButton from './mockup-button';
import AddList from './add-list';
import { useState } from 'react'

function Dashboard({ users, shopLists, userId }) {

    const [serverData, setServerData] = useState(false);
    const [show, setShow] = useState(false);

    const [lists, setLists] = useState(shopLists);
    const [listId, setListId] = useState(null);

    return (
        <>
            <div style = {{background: "beige", fontSize: '40px', paddingTop: '10px', paddingBottom: '5px', paddingLeft: "10px"}}>
                <p>Sopping List</p>
            </div>

            <MockupButton
                serverData={serverData}
                setServerData={setServerData}
                setLists={setLists}
                setListId={setListId}
                shopLists={shopLists}
                userId={userId}
                lists ={lists}
            />

            <AddList
                userId = {userId}
                setShow = {setShow}
                setLists = {setLists}
                setListId = {setListId}
                serverData = {serverData}
            />

            <Toggle 
                userId = {userId}
                users = {users} 

                lists = {lists}
                setLists = {setLists}

                show = {show}
                setShow = {setShow}

                listId = {listId}
                setListId = {setListId}

                serverData = {serverData}
            />

            <div style = {{marginBottom: '50px'}}></div>
        </>
    )
}

export default Dashboard