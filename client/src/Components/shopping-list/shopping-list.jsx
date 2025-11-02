import Header from "./header";
import BodyTop from "./body-top";
import BodyBot from "./body-bot";
import Footer from "./footer";

function ShoppingList({ users, shopL, userId }) {

    return (
        <>
            <Header title = {shopL.title} archived = {shopL.archived}/>

            <Footer archived = {shopL.archived} users = {users} members = {shopL.members} userId = {userId} owner = {shopL.owner} id = {shopL.id}/>
        </>
    )
}

export default ShoppingList