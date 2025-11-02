import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Render({ array, setArray, editingId, setEditingId, boolean }) {
    
    const handleStatus = (id) => {
        const update = array.map((i) => i.id === id ? {...i, status: !boolean } : i);
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

    return (
    <ListGroup>
        {array.filter(item => item.status === boolean).map((item) => (
            <ListGroup.Item key = {item.id}>
                <span>
                    <Button className = 'checkbox' onClick = {() => handleStatus(item.id)}>
                        <i className = {item.status ? 'bi bi-check-square' : 'bi bi-square'}/>
                    </Button>
                </span>

                {item.id === editingId ? (
                    <span>
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
                    </span>
                ) : (
                    <Button className = 'edit-name' onClick = {() => setEditingId(item.id)}>
                        {item.name ?? ''}
                    </Button>
                )}
                <span>
                    <Button className = 'remove-icon' onClick = {() => handleRemove(item.id)}>
                        <i className = 'bi bi-x-lg'/>
                    </Button>
                </span>
            </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Render