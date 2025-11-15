import Members from './member-modal';
import Archive from './archive'
import Delete from './delete';
import Unlink from './unlink';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Footer({ archived, users, members, userId, owner, id, setLists, setModalId, handleClose, setValue }) {

    return(
        <Modal.Footer>
            {archived &&
                <p>(archivován)</p>
            }
            <Archive 
                archived = {archived}
                setValue = {setValue}
            />
            <Members 
                users = {users} 
                members = {members} 
                userId = {userId} 
                owner = {owner}
                setValue = {setValue}
            />

            {owner === userId? (
                <Delete 
                    id = {id} 
                    setLists = {setLists} 
                    setModalId = {setModalId} 
                />
            ) : (
                <Unlink 
                    members = {members} 
                    userId = {userId} 
                    id = {id}
                    setValue = {setValue} 
                    setModalId = {setModalId} 
                    setLists = {setLists}
                />
            )}
            <Button variant = "secondary" onClick = {handleClose}> Zavřít</Button>
        </Modal.Footer>
    )
}

export default Footer