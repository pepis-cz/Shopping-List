import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Render({ array, setArray, editingId, setEditingId, boolean, setValue }) {

    const handleStatus = (id) => {
        const update = array.map((i) => i.id === id ? {...i, status: !boolean } : i);
        setArray(update);
        setValue(array);
    }

    const handleRemove = (id) => {
        setArray((prev) => prev.filter((item) => item.id !== id));
        setValue(array);
    };

    const saveName = () => setEditingId(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    }

    return (
    <ListGroup>
        {array.filter(item => item.status === boolean).map((item) => (
            <ListGroup.Item style = {{display: 'flex'}} key = {item.id}>
                <Button style = {{
                    background: "transparent",
                    marginRight: "5px"
                }}
                    variant = 'light'
                    size = 'lg'
                    onClick = {() => handleStatus(item.id)}
                >
                    <i className = {item.status ? 'bi bi-check-square' : 'bi bi-square'}/>
                </Button>

                {item.id === editingId ? 
                    <Form style = {{
                        width: "350px", 
                        marginTop: "5px"
                    }}>
                        <Form.Control
                            type = 'text'
                            value={item.name}
                            onChange = {
                                (e) => {
                                    const update = array.map((item) => 
                                        item.id === editingId ? { ...item, name: e.target.value } : item);
                                        setArray(update);
                                        setValue(array);
                                }
                            }

                            onBlur = {saveName}
                            onKeyDown = {handleKeyDown}
                            autoFocus
                            />
                    </Form>
                : 
                    <Button style = {{
                        background: "transparent", 
                        width: "350px", 
                        textAlign: "left", 
                        overflow: "hidden", 
                        textOverflow: 'ellipsis'
                    }} 
                        variant = 'light' 
                        size = 'lg' 
                        onClick = {() => setEditingId(item.id)}
                    >
                        {item.name}
                    </Button>
                }
                <Button style = {{
                    background: "transparent", 
                    marginLeft: "5px"
                }} 
                    variant = 'light' 
                    size = 'lg' 
                    onClick = {() => handleRemove(item.id)}
                >
                    <i className = 'bi bi-x-lg'/>
                </Button>
            </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Render