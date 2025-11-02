import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import './header.css'

function Header({ title, archived }) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(title ?? 'New List');

    const saveName = () => {setEditing(false)}

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    }

    return (
        <>
            {editing ? (
                <div className = 'header'>
                        <Form style={{paddingLeft: '10px', width: "912px", display: 'flex'}} className = 'form' onSubmit = {saveName}>

                            <Form.Control
                                type = 'text'
                                placeholder = 'Name'
                                value={name ?? 'new List'}
                                onChange = {(e) => setName(e.target.value)}
                                onBlur = {saveName}
                                onKeyDown = {handleKeyDown}
                                autoFocus
                            />

                            <Button style={{float: 'right', marginLeft: '10px'}} variant = 'light' size = 'lg' type = 'submit'>
                                <i className = 'bi bi-check2'/>
                            </Button>

                        </Form>
                </div>
            ) : (
                <div className = 'header'>
                    <div className = 'icon'>
                        <Button style = {{marginRight: '20px'}} variant = 'light' size = 'lg' onClick = {() => setEditing(true)}>
                            <i className = 'bi bi-pencil'/>
                        </Button>
                    </div>

                    <div className = 'title'>
                        {name}
                    </div>
                        {archived &&
                            <p className = 'note'> (Archivován)</p>
                        }
                </div>
            )}
        </>
    )
}

export default Header;