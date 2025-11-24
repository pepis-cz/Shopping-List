import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Unlink({ members, userId, id, setLists, setShow }) {
    const [member, setMember] = useState(members);

    const handleDelete = () => {
            setMember(prev => {
                const newMember = prev.filter(item => item !== userId);
                setLists(prev => prev.map(item => item._id === id ? {...item, members: newMember} : item));
                return newMember;
            });
        setShow(false);
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