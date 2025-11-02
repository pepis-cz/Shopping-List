import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function Modal({ members }) {
    const [show, setShow] = useState(false);
    const [array, setArray] = useState(members);

    const onHide = () => setShow(false);

    //kontrola zda existuje id
    const saveName = () => setEditingId(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    }

    const handleRemove = (id) => {
        setArray((prev) => prev.filter((item) => item !== id));
    }

    return (
        <>

            <Button onClick = {() => setShow(true)}>
                <i className = 'bi bi-person'/>
            </Button>

            {show &&
                <Modal onHide = {onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Spolupracovníci</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ListGroup>
                            {array.map((member) => (
                                <ListGroup.Item key = {member.id}>
                                    <>
                                        <i className = 'bi bi-person'/>
                                        {member.email}
                                        {owner && <span>(Vlastník)</span>}
                                    </>

                                    {userId === owner && member.id !== owner &&(
                                        <Button onClick = {() => handleRemove(member.id)}>
                                            <i className = 'bi bi-x-lg'/>
                                        </Button>
                                    )}
                                </ListGroup.Item>
                            ))}

                            <ListGroup.Item>
                                {owner &&
                                    <Form>
                                        <Form.Control
                                            type = 'email'
                                            placeholder = 'E-mailová adresa pro sdílení'

                                            onBlur = {saveName}
                                            onKeyDown = {handleKeyDown}
                                        />
                                    </Form>
                                }
                            </ListGroup.Item>
                        </ListGroup>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant = 'secondary' onClick={onHide}>Zavřít</Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}

export default Modal