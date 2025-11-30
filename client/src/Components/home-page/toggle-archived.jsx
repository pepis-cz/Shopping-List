import Button from 'react-bootstrap/Button'
import Cards from './card';
import { useState } from 'react'

function Toggle({ users, userId, lists, setLists, show, setShow, listId, setListId, serverData }) {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <>
            <Button style = {{marginLeft: '20px', marginBottom: '25px'}} variant = 'secondary' onClick = {handleToggle}>
                {toggle ? "Skrýt archivované" : "Zobrazit archivované"}
            </Button>

            {toggle ? (
                <Cards
                    users = {users} 
                    userId = {userId} 
                    lists = {lists} 
                    condition = {false}
                    setLists = {setLists}  
                    show = {show} 
                    setShow = {setShow} 
                    listId = {listId} 
                    setListId = {setListId}
                    serverData = {serverData}
                />
            ) : (
                <Cards
                    users = {users} 
                    userId = {userId} 
                    condition = {true}
                    lists = {lists} 
                    setLists = {setLists} 
                    show = {show} 
                    setShow = {setShow} 
                    listId = {listId} 
                    setListId = {setListId}
                    serverData = {serverData}
                />
            )}
        </>
    )
}

export default Toggle