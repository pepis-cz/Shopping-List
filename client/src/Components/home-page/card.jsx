import ShoppingList from '../shopping-list/shopping-list'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

function Cards({ users, userId, lists, setLists, archived, show, setShow }) {

    const handleStatus = (id) => {
        setLists(prev => {
            return prev.map(
                obj => ({...obj, items: obj.items.map(
                    item => item.id === id ? {...item, status: !item.status} : item
                )})
            )
        });
    }

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            {lists.filter(item => item.archived === archived && item.members.includes(userId)).map(obj => (
                <>
                    <Card style={{ width: '300px' }} onClick = {handleClick} key = {obj.id}>
                        <Card.Header>
                            {obj.title === '' ? "list" : obj.title}
                        </Card.Header>

                        <Card.Body>

                            <ListGroup style = {{display: "flex"}}>

                            {obj.items.length !== 0 &&
                                <>
                                    {obj.items.filter(item => item.status === false).slice(0, 5).map((item) => 
                                        <div key = {item.id}>
                                            <ListGroup.Item style = {{display: "flex"}}>
                                                <Button variant = 'light' style = {{background: 'transparent', marginRight: '5px'}} onClick = {(e) => {
                                                    e.stopPropagation();
                                                    handleStatus(item.id);
                                                }}>
                                                    <i className = 'bi bi-square'/>
                                                </Button>

                                                <span style = {{
                                                    marginTop: '6px',
                                                    width: '180px',
                                                    overflow: "hidden", 
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {item.name}
                                                </span>
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
                    
                    <ShoppingList
                        users = {users}
                        shopList = {obj}
                        userId = {userId}
                        lists = {lists}
                        setLists = {setLists}
                        show = {show}
                        setShow = {setShow}
                    />
                </>
            ))}
        </>
    )
}

export default Cards