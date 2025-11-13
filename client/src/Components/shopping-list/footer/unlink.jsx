import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Unlink({ members, userId, setModalId }) {
    const [value, setValue] = useState(members);

    const handleDelete = (id) => {
        setModalId(null);
        setValue((prev) => prev.filter((item) => item !== id));
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