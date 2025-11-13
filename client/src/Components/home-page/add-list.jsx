import Button from 'react-bootstrap/Button'
import ShoppingList from '../shopping-list/shopping-list';
const crypto = require('crypto');

function AddList({ setLists, owner, users, show, setShow }) {
    const handleAdd = () => {
        const newList = {
            id: crypto.randomBytes(16).toString('hex'),
            title: '',

            items: [],

            owner: {owner},
            members: [owner],
            archived: false
        };

        setLists(prev => [...prev, newList]);
        setShow(true);

        <ShoppingList
            users = {users}
            shopList = {newList}
            userId = {owner}
            show = {show}
            setShow = {setShow}
            setLists = {setLists}
        />
    }

    return (
        <Button variant = 'light' size = 'lg' onClick = {handleAdd}>
            Přidat seznam
        </Button>
    )
}
//pridat editingId jako pro itemy
export default AddList