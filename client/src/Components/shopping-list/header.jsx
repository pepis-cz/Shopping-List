import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

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
                <>
                    <Form onSubmit = {saveName}>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Name'
                            value={name}
                            onChange = {(e) => setName(e.target.value)}
                            onBlur = {saveName}
                            onKeyDown = {handleKeyDown}
                            autoFocus
                        />
                        <Button type = 'submit'>
                            <i className = 'bi bi-checck2'/>
                        </Button>
                    </Form>
                </>
            ) : (
                <>
                    <span className = 'left-title'>{name}</span>
                    {archived &&
                        <span className = 'middle-title'>Archivován</span>
                    }

                    <span className = 'right-title'>
                    <Button onClick = {() => setEditing(true)}>
                        <i className = 'bi bi-pencil'/>
                    </Button>
                    </span>
                </>
            )}
        </>
    )
}

export default Header;