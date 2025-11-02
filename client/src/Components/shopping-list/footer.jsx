import Button from 'react-bootstrap/button'
import { useState } from 'react'

function showMember() {
    const [show, setShow] = useState(false);

    return (
        <Button onClick = {() => setShow(!show)}>
            <i className = 'bi bi-person'/>
        </Button>
    )
}


