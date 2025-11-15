import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { useState } from 'react'

function Members({ users, members, userId, owner, setValue }) {

    const [view, setView] = useState(false);
    const [member, setMember] = useState(members);

    const [email, setEmail] = useState('')
    const [exist, setExist] = useState(true);

    const usersMap = new Map(users.map(item => [item.id, item]));

    const handleCreate = (e) => {
        e.preventDefault();

        const found = users.find((item) => item.email === email);

        if (found) {
            setMember(prev => {
                const newMember = [...prev, found.id];
                setValue(prev => ({...prev, members: newMember}));
                return newMember;
            })
            setEmail('');

        }else{
            setExist(false);
        }
    }

    const handleRemove = (id) => {
        setMember(prev => {
            const newMember = prev.filter(item => item !== id);
            setValue(prev => ({...prev, members: newMember}));
            return newMember;
        })
    }

    const onHide = () => setView(false);

    return (
        <>
            <Button style={{background: "transparent"}} 
                variant = 'light' 
                size = 'lg' 
                onClick = {() => setView(true)}
            >
                <i className = 'bi bi-people'/>
            </Button>

            <Modal show = {view} onHide = {onHide}>
                <Modal.Header closeButton>
                        <Modal.Title>Spolupracovníci</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        {member.map((id) => {
                            const member = usersMap.get(id);

                            return (
                                <ListGroup.Item style = {{display: 'flex'}} key = {member.id}>
                                        <div style = {{marginTop: '1px'}}>
                                            <i style = {{marginRight: '7px'}} className = 'bi bi-person'/>
                                            {member.email}
                                            {member.id === owner && <span> (Vlastník)</span>}
                                        </div>

                                        {userId === owner && member.id !== owner && (
                                            <Button style = {{marginLeft: '5px', background: 'transparent'}} size = 'sm' variant = 'light' onClick = {() => handleRemove(member.id)}>
                                                <i className = 'bi bi-x-lg'/>
                                            </Button>
                                        )}
                                </ListGroup.Item>
                            )
                        })}
    
                        <ListGroup.Item>
                            {owner === userId &&
                                <Form onSubmit = {handleCreate}>
                                    <div style = {{display: 'flex'}}>
                                        <Form.Control style = {{
                                            maxWidth: '440px',
                                            height: '32px'
                                        }}
                                            type = 'email'
                                            value = {email}
                                            placeholder = 'E-mailová adresa pro sdílení'
                                            onChange = {(e) => {
                                                setEmail(e.target.value);
                                                setExist(true);
                                            }}
                                        />

                                        <Button style = {{background: 'transparent', marginLeft: '5px'}} variant = 'light' size = 'sm' type = 'submit'>
                                            <i className = 'bi bi-check2'/>
                                        </Button>
                                    </div>

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