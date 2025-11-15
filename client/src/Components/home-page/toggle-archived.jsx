import Button from 'react-bootstrap/Button'
import Cards from './card';
import { useState } from 'react'

function Toggle({ users, userId, lists, setLists, modalId, setModalId }) {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <>
            <Button variant = 'light' onClick = {handleToggle}>
                {toggle ? "Skrýt archivované" : "Zobrazit archivované"}
            </Button>

            {toggle && (
                <Cards
                    users = {users} 
                    userId = {userId} 
                    lists = {lists} 
                    setLists = {setLists}  
                    archived = {true}
                    modalId = {modalId}
                    setModalId = {setModalId}
                />
            )}
        </>
    )
}

export default Toggle