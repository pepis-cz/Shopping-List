import Button from 'react-bootstrap/Button'
import Card from './card';
import { useState } from 'react'

function Toggle({ users, userId, lists, setLists, show, setShow }) {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <>
            <Button variant = 'light' onClick = {handleToggle}>
                {toggle ? "Skrýt archivované" : "Zobrazit archivované"}
            </Button>

            {toggle && (
                <Card 
                    users = {users} 
                    userId = {userId} 
                    lists = {lists} 
                    setLists = {setLists} 
                    show = {show} 
                    setShow = {setShow} 
                    archived = {true}
                />
            )}
        </>
    )
}

export default Toggle