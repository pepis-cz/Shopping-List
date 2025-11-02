import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { useState } from 'react'

function Members({ users, members, userId, owner }) {

    const [show, setShow] = useState(false);
    const [member, setMember] = useState([...members]);

    const [email, setEmail] = useState('')
    const [exist, setExist] = useState(true);

    const usersMap = new Map(users.map(item => [item.id, item]));

    const handleCreate = (e) => {
        e.preventDefault();

        const found = users.find((item) => item.email === email);

        if (found) {
            setMember(prev => [...prev, found.id]);
            setEmail('');
        }else{
            setExist(false);
        }
    }

    const handleRemove = (id) => {

        setMember((prev) => prev.filter((item) => item !== id));
    }

    const onHide = () => setShow(false);

    return (
        <>
            <Button style={{marginLeft: "5px", marginRight: "5px"}} variant = 'light' size = 'lg' onClick = {() => setShow(true)}>
                <i className = 'bi bi-person'/>
            </Button>

            <Modal show = {show} onHide = {onHide}>
                <Modal.Header closeButton>
                        <Modal.Title>Spolupracovníci</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        {member.map((id) => {
                            const member = usersMap.get(id);

                            return (
                                <ListGroup.Item key = {member.id}>
                                    <span>
                                        <i style={{marginRight: "15px"}} className = 'bi bi-person'/>
                                        {member.email}
                                        {member.id === owner && <span> (Vlastník)</span>}
                                    </span>

                                    <span>
                                        {userId === owner && member.id !== owner && (
                                            <Button style={{marginLeft: "15px"}} variant = 'light' onClick = {() => handleRemove(member.id)}>
                                                <i className = 'bi bi-x-lg'/>
                                            </Button>
                                        )}
                                    </span>
                                </ListGroup.Item>
                            )
                        })}

                        <ListGroup.Item>
                            {owner === userId &&
                                <Form style={{width: "442px", display: 'flex'}} onSubmit = {handleCreate}>
                                    <Form.Control
                                        type = 'email'
                                        value = {email}
                                        placeholder = 'E-mailová adresa pro sdílení'
                                        onChange = {(e) => {
                                            setEmail(e.target.value);
                                            setExist(true);
                                        }}
                                    />

                                    <Button style={{marginLeft: "5px"}} variant = 'light' type = 'submit'>
                                        <i className = 'bi bi-check2'/>
                                    </Button>

                                    {!exist && 
                                        <Form.Text>
                                        Takový e-mail neexistuje v systému.
                                        </Form.Text>
                                    }
                                </Form>
                            }
                        </ListGroup.Item>
                    </ListGroup>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant = 'secondary' onClick={onHide}>Zavřít</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Members