import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Warning({ warn, setWarn, lists, setLists, id, setShow }) {
    const handleDelete = (id) => {
        setWarn(false);
        setShow(false);
        setLists(prev => prev.filter((item) => item.id !== id));
    }

    return (
        <Modal show = {warn} onHide = {() => setShow(false)}>
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