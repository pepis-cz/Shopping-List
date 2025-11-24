import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Warning({ warn, setWarn, setLists, id }) {
    const handleDelete = (id) => {
        setWarn(false);
        setLists(prev => prev.filter((item) => item._id !== id));
    }

    return (
        <Modal show = {warn} onHide = {() => setWarn(false)}>
            <Modal.Header>
                <Modal.Title>Varování</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Chcete opravdu smazat tento seznam?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {() => setWarn(false)}>Zrušit</Button>
                <Button variant="primary" onClick = {() => handleDelete(id)}>Smazat</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Warning