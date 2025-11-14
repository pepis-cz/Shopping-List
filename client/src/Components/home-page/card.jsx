import ShoppingList from '../shopping-list/shopping-list'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

function Cards({ users, userId, lists, setLists, show, setShow, archived, modalId, setModalId }) {
    const handleStatus = (id) => {
        lists.filter(item => item.id === id).map(item => item ? {...item, status: !item.status} : item)
    }

    const handleClick = (id) => {
        setShow(true);
        setModalId(id);
        console.log(id);
    }

    return (
        <>
            {lists.filter(item => item.archived === archived).map(item => (
                <>
                    <Card style={{ width: '18rem' }} onClick = {() => handleClick(item.id)} key = {item.id}>
                        <Card.Header>
                            {item.title === '' ? "list" : item.title}
                        </Card.Header>

                        <Card.Body>

                            <ListGroup style = {{display: "flex"}}>

                            {item.items.length !== 0 ? (
                                <>
                                    {item.items.map((i) => 
                                        <div style = {{display: "flex"}}>
                                            <ListGroup.Item key = {i.id}>
                                                <Button onclick = {handleStatus(i.id)}>
                                                    <i className = 'bi bi-square'/>
                                                </Button>

                                                {i.name}
                                            </ListGroup.Item>
                                        </div>
                                    )}
                                </> 
                            ) : (
                                    <ListGroup.Item>
                                            <p>prázdný</p>
                                    </ListGroup.Item>
                            )}

                                {lists.length > 5 ?
                                <ListGroup.Item>
                                    <p>...</p>
                                </ListGroup.Item>
                                : null}
                            </ListGroup>

                        </Card.Body>
                    </Card>
                    
                    {modalId === item.id &&
                        <ShoppingList
                            users = {users}
                            shopList = {item}
                            userId = {userId}
                            show = {show}
                            setShow = {setShow}
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