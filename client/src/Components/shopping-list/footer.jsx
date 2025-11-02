import Archive from './archive'
import Members from './member-modal';

import Delete from './delete';
import Unlink from './unlink';

function Footer({ archived, setArchived, users, members, userId, owner, id }) {

    return(
        <>
            <Archive archived = {archived} setArchived = {setArchived}/>
            <Members users = {users} members = {members} userId = {userId} owner = {owner}/>

            {owner === userId? (
                <Delete id = {id}/>
            ) : (
                <Unlink array = {members} userId = {userId}/>
            )}
        </>
    )
}

export default Footer