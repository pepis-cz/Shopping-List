import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function Title(title = 'List', archived = '') {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(title);

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
                            value={value}
                            onChange = {(e) => setValue(e.target.value)}
                            onBlur = {saveTitle}
                            onKeyDown = {handleKeyDown}
                            autoFocus
                        />
                    </Form>
                </>
            ) : (
                <>
                    <h1 className = 'title'>{value}</h1>
                    <h2 className = 'archived'>{archived}</h2>

                    <Button onClick = {() => setEditing(true)}>
                        <i className = 'bi bi-pencil'/>
                    </Button>
                </>
            )}
        </>
    )
}

export default Title;