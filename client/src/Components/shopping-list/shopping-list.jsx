import Header from "./header";
import Footer from "./footer/footer";
import Body from "./body/body";
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

function ShoppingList({ users, shopList, userId, lists, setLists, setModalId }) {

    const [value, setValue] = useState(shopList);
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setLists(prev => prev.map(item => item.id === value.id ? value : item));
        setModalId(null);
    }

    return (
        <Modal show = {show} onHide = {handleClose}>
            <Header
                title = {value.title}
                setValue = {setValue}
            />

            <Body
                items = {value.items}
                setValue = {setValue}
            />

            <Footer
                archived = {value.archived}
                users = {users}
                members = {value.members}
                userId = {userId}
                owner = {value.owner}
                id = {value.id}
                lists = {lists}
                setLists = {setLists}
                setModalId = {setModalId}
                handleClose = {handleClose}
                setValue = {setValue}
            />
        </Modal>
    )
}

export default ShoppingList