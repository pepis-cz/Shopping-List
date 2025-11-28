import Button from 'react-bootstrap/Button'
import ShoppingList from '../shopping-list/shopping-list';

function AddList({ users, userId, lists, setLists, show, setShow, listId, setListId }) {

    const handleAdd = () => {
        const newList = {
            _id: lists.length ? Math.max( ...lists.map(item => item._id)) + 1 : 0,
            title: '',

            items: [],

            owner: userId,
            members: [userId],
            archived: false
        };

        setLists(prev => [...prev, newList]);
        //handleCreate(userId);
        setShow(true);
        setListId(newList._id);
    }

    return (
        <>
            <div style = {{display: 'flex', justifyContent: 'center', marginTop: '50px', paddingBottom: "25px"}}>
                <Button variant = 'secondary' size = 'lg' onClick = {handleAdd}>
                    Přidat seznam
                </Button>
            </div>

            {listId === lists[lists.length-1] &&
                <ShoppingList
                    users = {users}
                    shopList = {lists[lists.length-1]}
                    userId = {userId}
                    lists = {lists}
                    setLists = {setLists}
                    show = {show}
                    setShow = {setShow}
                    setListId = {setListId}
                />
            }
        </>
    )
}

export default AddList