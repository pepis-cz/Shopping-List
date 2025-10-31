import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'

function MemberModal({show = false, onHide = () => {}, list}) {
    return (
        <>
            <Modal show = {show} onHide = {onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Members</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>{list.owner} Owner</ListGroup.Item>

                        {list?.members?.map((member) => {
                            <ListGroup.Item key = {member.id}>
                                <>
                                    {member.email}
                                </>

                                <>
                                    <Button>
                                        <i className = 'bi bi-x-lg'/>
                                    </Button>
                                </>
                            </ListGroup.Item>
                        })}

                    </ListGroup>


                </Modal.Body>

                <Modal.Footer>
                    <Button variant = 'primary' onClick={onHide}>Save</Button>
                    <Button variant = 'secondary' onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MemberModal