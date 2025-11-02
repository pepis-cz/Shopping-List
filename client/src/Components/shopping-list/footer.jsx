import Members from './member-modal';
import Archive from './archive'
import Delete from './delete';
import Unlink from './unlink';
import './footer.css'

function Footer({ archived, setArchived, users, members, userId, owner, id }) {

    return(
        <>
            <div className = 'footer'>
                <Archive archived = {archived} setArchived = {setArchived}/>
                <Members users = {users} members = {members} userId = {userId} owner = {owner}/>

                {owner === userId? (
                    <Delete id = {id}/>
                ) : (
                    <Unlink array = {members} userId = {userId}/>
                )}
            </div>
        </>
    )
}

export default Footer