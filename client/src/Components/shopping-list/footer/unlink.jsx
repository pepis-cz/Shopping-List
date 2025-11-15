import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Unlink({ members, userId, id, setModalId, setLists }) {
    const [member, setMember] = useState(members);

    const handleDelete = () => {
            setMember(prev => {
                const newMember = prev.filter(item => item !== userId);
                setLists(prev => prev.map(item => item.id === id ? {...item, members: newMember} : item));
                return newMember;
            });
        setModalId(null);
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