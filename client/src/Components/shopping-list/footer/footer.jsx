import Members from './member-modal';
import Archive from './archive'
import Delete from './delete';
import Unlink from './unlink';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Footer({ archived, users, members, userId, owner, id, setLists, setShow, handleClose, setValue }) {

    return(
        <Modal.Footer style = {{justifyContent: 'space-between'}}>
            <div style = {{display: 'flex', gap: '5px'}}>
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
                    />
                ) : (
                    <Unlink 
                        members = {members} 
                        userId = {userId} 
                        id = {id}
                        setLists = {setLists}
                        setShow = {setShow}
                    />
                )}

                <Archive 
                    archived = {archived}
                    setValue = {setValue}
                />
            </div>

            <div>
                <Button style = {{justifyContent: 'flex-end'}} variant = "secondary" onClick = {handleClose}> Zavřít</Button>
            </div>
        </Modal.Footer>
    )
}

export default Footer