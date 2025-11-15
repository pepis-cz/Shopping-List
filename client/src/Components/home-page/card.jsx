import ShoppingList from '../shopping-list/shopping-list'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

function Cards({ users, userId, lists, setLists, archived, modalId, setModalId }) {

    const handleStatus = (id) => {
        setLists(prev => {
            return prev.map(
                obj => ({...obj, items: obj.items.map(
                    item => item.id === id ? {...item, status: !item.status} : item
                )})
            )
        });
    }

    const handleClick = (id) => {
        setModalId(id);
    }

    return (
        <>
            {lists.filter(item => item.archived === archived && item.members.includes(userId)).map(obj => (
                <>
                    <Card style={{ width: '18rem' }} onClick = {() => handleClick(obj.id)} key = {obj.id}>
                        <Card.Header>
                            {obj.title === '' ? "list" : obj.title}
                        </Card.Header>

                        <Card.Body>

                            <ListGroup style = {{display: "flex"}}>

                            {obj.items.length !== 0 &&
                                <>
                                    {obj.items.filter(item => item.status === false).slice(0, 5).map((item) => 
                                        <div style = {{display: "flex"}} key = {item.id}>
                                            <ListGroup.Item>
                                                <Button onClick = {(e) => {
                                                    e.stopPropagation();
                                                    handleStatus(item.id);
                                                }}>
                                                    <i className = 'bi bi-square'/>
                                                </Button>

                                                {item.name}
                                            </ListGroup.Item>
                                        </div>
                                    )}
                                </> 
                            }

                                {obj.items.filter(item => item.status === false).length > 5 &&
                                    <ListGroup.Item>
                                        <p>+ 
                                            {obj.items.filter(item => item.status === false).length - 5}

                                            {obj.items.filter(item => item.status === false).length - 5 > 1 ? 
                                                (obj.items.filter(item => item.status === false).length - 5 > 4 ? 
                                                " nekompletních položek" : " nekompletní položky")
                                            : " nekompletní položka"}
                                        </p>
                                    </ListGroup.Item>
                                }
                            </ListGroup>

                        </Card.Body>
                    </Card>
                    
                    {modalId === obj.id &&
                        <ShoppingList
                            users = {users}
                            shopList = {obj}
                            userId = {userId}
                            lists = {lists}
                            setLists = {setLists}
                            setModalId = {setModalId}
                        />
                    }
                </>
            ))}
        </>
    )
}

export default Cards