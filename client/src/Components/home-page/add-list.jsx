import Button from 'react-bootstrap/Button'
import ShoppingList from '../shopping-list/shopping-list';

function AddList({ lists, setLists, userId, users, show, setShow }) {
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
    }

    return (
        <>
            <Button variant = 'light' size = 'lg' onClick = {handleAdd}>
                Přidat seznam
            </Button>

            <ShoppingList
                users = {users}
                shopList = {lists[lists.length - 1]}
                userId = {userId}
                show = {show}
                setShow = {setShow}
                lists = {lists}
                setLists = {setLists}
            />
        </>
    )
}

export default AddList