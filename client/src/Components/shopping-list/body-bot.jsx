import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function BodyBot(dtoIn) {
    const [toggling, setToggling] = useState(true);

    const [array, setArray] = useState(dtoIn ?? []);
    const [editingId, setEditingId] = useState(null);

    const handleStatus = (params) => {
        const update = array.map((i) => i.id === params ? {...i, status: false } : i);
        setArray(update);
    }

    const handleRemove = (params) => {
        setArray((array) => array.filter((item) => item.id !== params))
    };

    const saveName = () => setEditingId(null)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    }

    return (
        <>
            <Button onClick = {() => {setToggling(!toggling)}}>
                {toggling ? (
                    <>Skrýt <i class = 'bi bi-chevron-up'/> </>
                ) : (
                    <>Zobrazit <i class = 'bi bi-chevron-down'/> </>
                )}
            </Button>
    
            {toggling ? (
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
            ) : (
                <></>
            )}
        </>
    )
}

export default BodyBot