import Members from './member-modal';
import Archive from './archive'
import Delete from './delete';
import Unlink from './unlink';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Footer({ archived, users, members, userId, owner, id, setShow, lists, setLists, setModalId }) {

    const handleClose = () => {
        setModalId(null);
        setShow(false);
    }

    return(
        <Modal.Footer>
            <Archive 
                archived = {archived}
                lists = {lists}
                setLists = {setLists}
                id = {id}
            />
            <Members 
                users = {users} 
                members = {members} 
                userId = {userId} 
                owner = {owner}
            />

            {owner === userId? (
                <Delete id = {id} setLists = {setLists} setShow = {setShow} setModalId = {setModalId}/>
            ) : (
                <Unlink array = {members} userId = {userId}/>
            )}
            <Button variant = "secondary" onClick = {handleClose}> Zavřít</Button>
        </Modal.Footer>
    )
}

export default Footer