import Button from 'react-bootstrap/Button'
import Warning from '../../home-page/delete-modal';
import { useState } from 'react'

function Delete({ id, setLists, setShow, setModalId }) {
    const [warn, setWarn] = useState(false);

    const handleAlert = () => setWarn(true);

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
                setShow = {setShow}
                setModalId = {setModalId}
            />
        </>
    )
}

export default Delete