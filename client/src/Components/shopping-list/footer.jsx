import Archive from './archive';
import Members from './member-modal';

import Delete from './delete';
import Unlink from './unlink';

function Footer({ archived, users, members, userId, owner, id }) {
    return(
        <>
            <Archive archived = {archived}/>
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