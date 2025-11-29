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
            >

            </MockupButton>

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