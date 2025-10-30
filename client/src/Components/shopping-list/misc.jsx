import Button from 'react-bootstrap/button'
import { useState } from 'react'

function Archive() {
    const [archived, setArchived] = useState(false);

    return (
        <Button onClick = {() => { setArchived(!archived) }}>
            { archived === false ? <i className = 'bi bi-archive'/> : <i className = 'bi bi-recycle'/> }
        </Button>
    )
}

function ShowMember() {
    const [show, setShow] = useState(false);

    return (
        <Button onClick = {() => setShow(!show)}>
            <i className = 'bi bi-person'/>
        </Button>
    )
}

function Delete() {
    return (
        <Button>
            <i className = 'bi bi-x-lg'/>
        </Button>
    )
}

function Unlink() {
    return (
        <Button>
            <i className = 'bi bi-node-minus'/>
        </Button>
    )
}

function Misc(userId, OwnerId) {
    return (
        <>
            <Archive/>
            <ShowMember/>
            { userId === OwnerId ? <Delete/> : <Unlink/> }
        </>
    )
}

export default Misc