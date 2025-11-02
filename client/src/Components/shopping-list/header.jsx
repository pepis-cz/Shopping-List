import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function Title({ archived, title }) {
    const [editing, setEditing] = useState(archived ?? false);
    const [title, setTitle] = useState(title ?? 'New List');

    const saveTitle = () => {setEditing(false)}

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveTitle();
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
                            value={title}
                            onChange = {(e) => setTitle(e.target.value)}
                            onBlur = {saveTitle}
                            onKeyDown = {handleKeyDown}
                            autoFocus
                        />
                    </Form>
                </>
            ) : (
                <>
                    <h1 className = 'title'>{title}</h1>
                    {archived ? (
                        <h2 className = 'archived'>Archived</h2>
                    ) : (
                        <></>
                    )}

                    <Button onClick = {() => setEditing(true)}>
                        <i className = 'bi bi-pencil'/>
                    </Button>
                </>
            )}
        </>
    )
}

export default Title;