import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Render({ array, setArray, editingId, setEditingId, boolean, setValue }) {

    const handleStatus = (id) => {
        setArray(prev => {
            const newArray = prev.map((i) => i._id === id ? {...i, status: !boolean } : i);
            setValue(prev => ({...prev, items: newArray}));
            return newArray;
        })
    }

    const handleRemove = (id) => {
        setArray(prev => {
            const newArray = prev.filter(item => item._id !== id);
            setValue(prev => ({...prev, items: newArray}));
            return newArray;
        })
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
            <ListGroup.Item style = {{display: 'flex'}} key = {item._id}>
                <Button style = {{
                    background: "transparent",
                    marginRight: "5px"
                }}
                    variant = 'light'
                    size = 'lg'
                    onClick = {() => handleStatus(item._id)}
                >
                    <i className = {item.status ? 'bi bi-check-square' : 'bi bi-square'}/>
                </Button>

                {item._id === editingId ? 
                    <Form style = {{
                        width: "350px", 
                        marginTop: "5px"
                    }}>
                        <Form.Control
                            type = 'text'
                            value={item.name}
                            onChange = {
                                (e) => {
                                    setArray(prev => {
                                        const newArray = prev.map(item => 
                                            item._id === editingId ? { ...item, name: e.target.value } : item);
                                            setValue(prev => ({...prev, items: newArray}));
                                            return newArray;
                                    })
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
                        onClick = {() => setEditingId(item._id)}
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
                    onClick = {() => handleRemove(item._id)}
                >
                    <i className = 'bi bi-x-lg'/>
                </Button>
            </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Render