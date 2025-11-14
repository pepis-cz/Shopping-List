import Header from "./header";
import Footer from "./footer/footer";
import Body from "./body/body";
import Modal from 'react-bootstrap/Modal'

function ShoppingList({ users, shopList, userId, show, setShow, lists, setLists, setModalId }) {

    const handleClose = () => {
        setModalId(null);
        setShow(false);
    }

    return (
        <Modal show = {show} onHide = {handleClose}>
            <Header
                title = {shopList.title}
                archived = {shopList.archived}
            />

            <Body
                items = {shopList.items}
            />

            <Footer
                archived = {shopList.archived}
                users = {users}
                members = {shopList.members}
                userId = {userId}
                owner = {shopList.owner}
                id = {shopList.id}
                setShow = {setShow}
                lists = {lists}
                setLists = {setLists}
                setModalId = {setModalId}
            />
        </Modal>
    )
}

export default ShoppingList