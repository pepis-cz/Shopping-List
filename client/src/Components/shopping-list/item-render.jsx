import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './body.css'

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
                    <Button variant = 'light' size = 'lg' onClick = {() => handleStatus(item.id)}>
                        <i className = {item.status ? 'bi bi-check-square' : 'bi bi-square'}/>
                    </Button>
                </span>

                {item.id === editingId ? (
                    <span>
                        <Form style ={{display: 'flex', width: '700px', marginLeft: "70px"}}>
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
                    <Button style={{width: "780px", height: "48px", textAlign: 'left'}} variant = 'light' size = 'lg' onClick = {() => setEditingId(item.id)}>
                        {item.name ?? ''}
                    </Button>
                )}
                <span>
                    <Button variant = 'light' size = 'lg' onClick = {() => handleRemove(item.id)}>
                        <i className = 'bi bi-x-lg'/>
                    </Button>
                </span>
            </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Render