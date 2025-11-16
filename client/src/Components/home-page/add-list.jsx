import Button from 'react-bootstrap/Button'
import ShoppingList from '../shopping-list/shopping-list';

function AddList({ lists, setLists, userId, users, show, setShow, listId, setListId }) {

    const handleAdd = () => {
        const newList = {
            id: lists.length ? Math.max( ...lists.map(item => item.id)) + 1 : 0,
            title: '',

            items: [],

            owner: userId,
            members: [userId],
            archived: false
        };

        setLists(prev => [...prev, newList]);
        setShow(true);
        setListId(newList.id);
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