import Header from "./header";
import Footer from "./footer";

import { useState } from "react";

function ShoppingList({ users, shopL, userId }) {

    const [archived, setArchived] = useState(shopL.archived);

    console.log('ShoppingList:', archived, setArchived);

    return (
        <>
            <Header title = {shopL.title} archived = {archived}/>

            <Footer archived = {archived} setArchived = {setArchived} users = {users} members = {shopL.members} userId = {userId} owner = {shopL.owner} id = {shopL.id}/>
        </>
    )
}

export default ShoppingList