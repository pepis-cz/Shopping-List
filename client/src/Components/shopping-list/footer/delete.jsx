import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState, useContext } from 'react'
import { sListContext } from '../../provider/sList';

function Delete({ id, setLists, setShow, serverData }) {

    const { handlerMap } = useContext(sListContext);

    const [warn, setWarn] = useState(false);

    const handleAlert = () => {
        setWarn(true);
    }

    const handleDelete = (id) => {
        if (!serverData) {
            setShow(false);
            setLists(prev => prev.filter((item) => item._id !== id));
        }else{
            async () => {
                const result = handlerMap.handleDelete({_id: id});
                if (result.ok) {
                    setShow(false);
                    setLists(result.data.cards);
                    return;
                }
            }
        }
        return;
    }

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
        </>
    )
}

export default Delete