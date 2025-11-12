import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

function Warning({ list, id }) {
    const [show, setShow] = useState(false);
    const [lists, setLists] = useState(list);
    const handleDelete = (id) => {
        setLists(prev => prev.filter((item) => item.id !== id));
    }

    return (
        <>
            {show &&
                <Modal>
                    <Modal.Header>
                        <Modal.Title>Varování</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Chcete opravdu smazat tento seznam?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick = {() => setShow(false)}>Zrušit</Button>
                        <Button variant="primary" onClick = {() => handleDelete(id)}>Smazat</Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}
//smazat soubor ci objekt pomoci array filter
export default Warning