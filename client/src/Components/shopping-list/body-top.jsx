import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function BodyTop(items) {
    const [array, setArray] = useState(items ?? []);
    const [editingId, setEditingId] = useState(null);

    const handleStatus = (id) => {
        const update = array.map((i) => i.id === id ? {...i, status: true } : i);
        setArray(update);
    }

    const handleRemove = (id) => {
        setArray((prev) => prev.filter((item) => item.id !== id))
    };

    const saveName = () => setEditingId(null)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    }

    const handleCreate = () => {
        const newItem = {
            id: array.length ? Math.max(...array.map((item) => item.id)) + 1 : 1,
            name: '',
            status: false
        }
        setArray([...array, newItem]);
        setEditingId(newItem.id);
    };

    return (
        <>
            <ListGroup>
                {array.map((item) => (
                    <ListGroup.Item key = {item.id}>
                        <Button className = 'checkbox' onClick = {() => handleStatus(item.id)}>
                            <i className = {item.status ? 'bi bi-check-square' : 'bi bi-square'}/>
                        </Button>

                        {item.id === editingId ? (
                                <Form>
                                    <Form.Control
                                    type = 'text'
                                    value={item.name}
                                    onChange = {
                                        (e) => {
                                            const update = array.map((item) => 
                                                item.id === editingId ? { ...item, name: e.target.value } : item);
                                            setArray(update);
                                        }
                                    }

                                    onBlur = {saveName}
                                    onKeyDown = {handleKeyDown}
                                    autoFocus
                                    />
                                </Form>
                        ) : (
                            <Button className = 'edit-name' onClick = {() => setEditingId(item.id)}>
                                {item.name ?? ''}
                            </Button>
                        )}

                        <Button className = 'remove-icon' onClick = {() => handleRemove(item.id)}>
                            <i className = 'bi bi-x-lg'/>
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Button className = 'add-item' onClick = {handleCreate}>
                <i className = 'bi bi-plus'/> Add item
            </Button>
        </>
    )
}

export default BodyTop