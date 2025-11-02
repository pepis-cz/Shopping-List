import Header from "./header";
import Footer from "./footer";
import Body from "./body";

import { useState } from "react";

function ShoppingList({ users, shopL, userId }) {

    const [archived, setArchived] = useState(shopL.archived);

    return (
        <>
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
        </>
    )
}

export default ShoppingList