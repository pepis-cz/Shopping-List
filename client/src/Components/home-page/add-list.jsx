import Button from 'react-bootstrap/Button'
import ShoppingList from '../shopping-list/shopping-list';

function AddList({ lists, setLists, userId, users,modalId, setModalId }) {
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
        setModalId(newList.id);
    }

    return (
        <>
            <Button variant = 'light' size = 'lg' onClick = {handleAdd}>
                Přidat seznam
            </Button>

        {modalId === lists[lists.length - 1] &&
            <ShoppingList
                users = {users}
                shopList = {lists[lists.length - 1]}
                userId = {userId}
                lists = {lists}
                setLists = {setLists}
                setModalId = {setModalId}
            />
        }
        </>
    )
}

export default AddList