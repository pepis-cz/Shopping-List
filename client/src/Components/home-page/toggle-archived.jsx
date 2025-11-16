import Button from 'react-bootstrap/Button'
import Cards from './card';
import { useState } from 'react'

function Toggle({ users, userId, lists, setLists, show, setShow, listId, setListId}) {

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
                    setLists = {setLists} 
                    condition = {false} 
                    show = {show} 
                    setShow = {setShow} 
                    listId = {listId} 
                    setListId = {setListId}
                />
            ) : (
                <Cards
                    users = {users} 
                    userId = {userId} 
                    lists = {lists} 
                    setLists = {setLists} 
                    condition = {true} 
                    show = {show} 
                    setShow = {setShow} 
                    listId = {listId} 
                    setListId = {setListId}
                />
            )}
        </>
    )
}

export default Toggle