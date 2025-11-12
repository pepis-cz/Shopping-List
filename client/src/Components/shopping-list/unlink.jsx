import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Unlink({ array, userId }) {
    const [value, setValue] = useState(array);

    const handleDelete = (id) => {
        setValue((prev) => prev.filter((item) => item !== id));
        window.location.reload();
    }

    return (
        <Button style={{background: "transparent"}} variant = 'light' size = 'lg' onClick = {() => handleDelete(userId)}>
            <i className = 'bi bi-node-minus'/>
        </Button>
    )
}

export default Unlink