import Button from 'react-bootstrap/Button'
import Cards from './card';
import { useState } from 'react'

function Toggle({ users, userId, lists, setLists, show, setShow}) {

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
                    show = {show} 
                    setShow = {setShow}
                />
            )}
        </>
    )
}

export default Toggle