import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
const crypto = require('crypto');

function AddList({ updateLists, owner }) {
    const handleAdd = () => {
        const newList = {
            id: crypto.randomBytes(16).toString('hex'),
            title: '',

            items: [],

            owner: {owner},
            members: [owner],
            archived: false
        };
        updateLists(prev => [...prev, newList]);
    }

    return (
        <Button variant = 'light' size = 'lg' onClick = {handleAdd}>
            Přidat seznam
        </Button>
    )
}

export default AddList