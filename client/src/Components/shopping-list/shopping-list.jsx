import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
import Modal from 'react-bootstrap/Modal'

function ShoppingList({ users, shopL, userId }) {

    const [archived, setArchived] = useState(shopL.archived);
    const [show, setShow] = useState(true);

    return (
        <Modal show = {show}>
            <Header
                title = {shopL.title} 
                archived = {archived}
            />

            <Body 
                items = {shopL.items}
            />

            <Footer 
                archived = {archived} 
                setArchived = {setArchived} 
                users = {users} 
                members = {shopL.members} 
                userId = {userId} 
                owner = {shopL.owner} 
                id = {shopL.id}
            />
        </Modal>
    )
}

export default ShoppingList