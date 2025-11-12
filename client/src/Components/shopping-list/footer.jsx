import Members from './member-modal';
import Archive from './archive'
import Delete from './delete';
import Unlink from './unlink';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Footer({ archived, setArchived, users, members, userId, owner, id }) {

    return(
        <Modal.Footer>
            <Archive archived = {archived} setArchived = {setArchived}/>
            <Members users = {users} members = {members} userId = {userId} owner = {owner}/>

            {owner === userId? (
                <Delete id = {id}/>
            ) : (
                <Unlink array = {members} userId = {userId}/>
            )}
            <Button variant = "secondary"> Zavřít</Button>
        </Modal.Footer>
    )
}

export default Footer