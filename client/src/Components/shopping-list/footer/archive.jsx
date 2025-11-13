import Button from 'react-bootstrap/Button'

function Archive({ archived, setArchived }) {
    const handleClick = () => 
        setArchived(!archived);

    return (
        <Button style={{
            background: "transparent"
        }} 
            variant = 'light' 
            size = 'lg' 
            onClick = {handleClick}
        >
            { archived ? <i className = 'bi bi-recycle'/> : <i className = 'bi bi-archive'/> }
        </Button>
    )
}

export default Archive