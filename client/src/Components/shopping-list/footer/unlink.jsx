import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Unlink({ members, userId, id, setLists, setShow }) {
    const [member, setMember] = useState(members);

    const handleDelete = () => {
        //const members = filter
        //handleUpdate(userId, filter)
            setMember(prev => {
                const newMember = prev.filter(item => item !== userId);
                setLists(prev => prev.map(item => item._id === id ? {...item, members: newMember} : item));
                return newMember;
            });
    }

    return (
        <Button style={{
            background: "transparent"
        }}
            variant = 'light'
            size = 'lg'
            onClick = {handleDelete}
        >
            <i className = 'bi bi-node-minus'/>
        </Button>
    )
}

export default Unlink