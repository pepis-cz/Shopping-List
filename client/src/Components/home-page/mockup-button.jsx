import Button from 'react-bootstrap/Button'

function MockupButton({ serverData, setServerData }) {
    
    const handleToggle = () => setServerData(!serverData);

    return (
        <>
            <p>mockup data</p>
            <Button onClick = {handleToggle}>
                {serverData ? <i className = 'bi bi-toggle-on'/> : <i className = 'bi bi-toggle-off'/>}
            </Button>
        </>
    )
}

export default MockupButton