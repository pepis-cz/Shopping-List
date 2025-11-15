import Button from 'react-bootstrap/Button'
import Warning from './delete-modal';
import { useState } from 'react'

function Delete({ id, setLists }) {
    const [warn, setWarn] = useState(false);

    const handleAlert = () => {
        setWarn(true);
    }

    return (
        <>
            <Button style={{
                background: "transparent"
            }} 
                variant = 'light' 
                size = 'lg' 
                onClick = {() => handleAlert()}
            >
                <i className = 'bi bi-trash'/>
            </Button>

            <Warning 
                warn = {warn} 
                setWarn = {setWarn}
                setLists = {setLists} 
                id = {id}
            />
        </>
    )
}

export default Delete