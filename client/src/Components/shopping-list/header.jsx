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
                    <Form>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Name'
                            value={name}
                            onChange = {(e) => setName(e.target.value)}
                            onBlur = {saveName}
                            onKeyDown = {handleKeyDown}
                            autoFocus
                        />
                    </Form>
                </>
            ) : (
                <>
                    <h1 className = 'name'>{name}</h1>
                    {archived &&
                        <h2 className = 'archived'>Archived</h2>
                    }

                    <Button onClick = {() => setEditing(true)}>
                        <i className = 'bi bi-pencil'/>
                    </Button>
                </>
            )}
        </>
    )
}

export default Header;