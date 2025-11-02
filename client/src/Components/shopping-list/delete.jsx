import Button from 'react-bootstrap/Button'

//owner array of lists, list id
function Delete({ id }) {

    const handleDelete = () => {
        window.location.reload();
    }

    return (
        <Button onClick = {() => handleDelete()}>
            <i className = 'bi bi-trash-bin'/>
        </Button>
    )
}

export default Delete