import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Unlink({ members, userId, setModalId, setValue }) {
    const [array, setArray] = useState(members);

    const handleDelete = (id) => {
        setModalId(null);
        setArray((prev) => prev.filter((item) => item !== id));
    }

    return (
        <Button style={{
            background: "transparent"
        }}
            variant = 'light'
            size = 'lg'
            onClick = {() => handleDelete(userId)}
        >
            <i className = 'bi bi-node-minus'/>
        </Button>
    )
}

export default Unlink