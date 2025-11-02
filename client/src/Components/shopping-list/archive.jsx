import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function Archive({ archived }) {
    const [toggle, setToggle] = useState(archived);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <Button onClick = {handleClick}>
            { toggle ? <i className = 'bi bi-recycle'/> : <i className = 'bi bi-archive'/> }
        </Button>
    )
}

export default Archive