import Button from 'react-bootstrap/Button'

function Delete({ id }) {

    const handleDelete = () => {
        window.location.reload();
    }

    return (
        <Button style={{marginLeft: "5px", marginRight: "5px"}} variant = 'light' size = 'lg' onClick = {() => handleDelete()}>
            <i className = 'bi bi-trash'/>
        </Button>
    )
}

export default Delete