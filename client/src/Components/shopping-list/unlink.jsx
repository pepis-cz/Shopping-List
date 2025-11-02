import Button from 'react-bootstrap/Button'
import { useState } from 'react'

//owner array of lists, list id

function Unlink({ array, id }) {
    const [value, setValue] = useState(array);

    const handleDelete = (id) => {
        setValue((prev) => prev.filter((item) => item !== id));
    }

    return (
        <Button onClick = {() => handleDelete(id)}>
            <i className = 'bi bi-node-minus'/>
        </Button>
    )
}

export default Unlink