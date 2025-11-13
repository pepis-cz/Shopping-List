import Button from 'react-bootstrap/Button'
import Warning from '../home-page/delete-modal';
import { useState } from 'react'

function Delete({ id, setLists }) {
    const [warn,setWarn] = useState(false);

    const handleAlert = () => {
        <Warning 
            warn = {warn} 
            setWarn = {setWarn} 
            setLists = {setLists} 
            id = {id}
        />
    }

    return (
        <Button style={{
            background: "transparent"
        }} 
            variant = 'light' 
            size = 'lg' 
            onClick = {() => handleAlert()}
        >
            <i className = 'bi bi-trash'/>
        </Button>
    )
}

export default Delete