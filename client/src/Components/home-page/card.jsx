import ShoppingList from '../shopping-list/shopping-list'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react'

function Card({ users, shopList, userId }) {

    const handleModal = (item) => {
        const [show, setShow] = useState(true);
        <ShoppingList 
            users = {users} 
            shopList = {item} 
            userId = {userId} 
            show = {show} 
            setShow = {setShow}
        />
    }

    return (
        <>
            {shopList.map((obj) =>
                <Card onClick = {handleModal(obj)}>
                    <Card.Header>{obj.title}</Card.Header>
                    <Card.Body>
                        <ListGroup>
                            {obj.items.map((item) => 
                                <>
                                    <Button>
                                        <i className = 'bi bi-square'/>
                                    </Button>
                                    <ListGroup.Item>{item.name}</ListGroup.Item>
                                </>
                            )}
                            <ListGroup.Item>
                                <p>+ {obj.items.filter((item) => item.status === true).length} hotový</p>
                            </ListGroup.Item>
                        </ListGroup>

                    </Card.Body>
                </Card>
            )}
        </>
    )
}

export default Card