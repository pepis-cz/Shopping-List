import Button from 'react-bootstrap/Button'

function Delete({ id }) {

    const handleDelete = () => {
        window.location.reload();
    }

    return (
        <Button style={{background: "transparent"}} variant = 'light' size = 'lg' onClick = {() => handleDelete()}>
            <i className = 'bi bi-trash'/>
        </Button>
    )
}

export default Delete