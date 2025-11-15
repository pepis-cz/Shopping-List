import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

function Header({ title, setValue }) {
    const [editing, setEditing] = useState(false);

    const [name, setName] = useState(title);

    const saveName = () => {
        setValue(prev => ({...prev, title: name}));
        setEditing(false);

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    }

    return (
        <Modal.Header>
            {editing ? (
                <Modal.Title>
                    <Form style = {{width: '470px'}} onSubmit = {saveName}>
                        <div style = {{display: "flex", gap: "10px"}}>
                            <Form.Control
                                type = 'text'
                                placeholder = 'Name'
                                value={name}
                                onChange = {(e) => setName(e.target.value)}
                                onBlur = {saveName}
                                onKeyDown = {handleKeyDown}
                                autoFocus
                            />

                            <Button style={{background: "transparent"}} variant = 'light' size = 'lg' type = 'submit'>
                                <i className = 'bi bi-check2'/>
                            </Button>
                        </div>
                    </Form>
                </Modal.Title>

            ) : (
                <Modal.Title>
                    <div style = {{display: 'flex', fontSize: "20px"}}>
                        
                            <div style = {{
                                marginTop: "6px", 
                                marginRight: '5px', 
                                overflow: "hidden", 
                                maxWidth: '410px',
                                textOverflow: 'ellipsis', 
                                whiteSpace: 'nowrap', 
                                opacity: name === '' ? '80%' : '100%'
                            }}> 
                                {name === '' ? 'Název' : name}
                            </div>

                        <Button style={{background: "transparent"}} variant = 'light' size = 'lg' onClick = {() => setEditing(true)}>
                            <i className = 'bi bi-pencil'/>
                        </Button>

                    </div>
                </Modal.Title>
            )}
        </Modal.Header>
    )
}

export default Header;