import Header from "./header";
import Footer from "./footer/footer";
import Body from "./body/body";
import Modal from 'react-bootstrap/Modal'
import { useState, useContext } from 'react'
import { sListContext } from "../provider/sList";

function ShoppingList({ users, shopList, userId, lists, setLists, show, setShow, serverData }) {

    const { handlerMap } = useContext(sListContext);

    //render data v dashboardu
    const [value, setValue] = useState(shopList);

    const handleClose = () => {
        if (!serverData) {
            setLists(prev => prev.map(item => item._id === value._id ? value : item));
            setShow(false);
        }else{
            const object = value;

            async () => {
                const result = await handlerMap.handleUpdate(object);

                if (result.ok) {
                    setLists(result.data.cards);
                    setShow(false);
                }
            }
        }
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
                id = {value._id}
                lists = {lists}
                setLists = {setLists}
                setShow = {setShow}
                handleClose = {handleClose}
                setValue = {setValue}
                serverData = {serverData}
            />
        </Modal>
    )
}

export default ShoppingList