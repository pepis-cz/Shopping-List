import ShoppingList from '../shopping-list/shopping-list'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { useContext } from 'react'
import { sListContext } from '../provider/sList'

function Cards({ users, userId, lists, setLists, condition, show, setShow, listId, setListId }) {

    const { handlerMap, serverData } = useContext(sListContext);

    const handleStatus = async (itm, obj) => {
        if(!serverData) {
            setLists(prev => {
                return prev.map(
                    obj => ({...obj, items: obj.items.map(
                        item => item._id === itm ? {...item, status: !item.status} : item
                    )})
                )
            });
        }else{
            const update = {
                _id: obj,
                items: [
                    {
                        _id: itm, 
                        status: true
                    }
                ]
            }
            const result = await handlerMap.handleUpdate(update);

            if (result.ok) {
                setLists(prev => prev.map(
                    obj => ({...obj, items: obj.items.map(
                        item => item._id === itm ? {...item, status: true} : item
                    )})
                ));
            }
        }
    }

    const handleClick = async (id) => {
        if(!serverData) {
            setListId(id);
            setShow(true);
        }else{
            const result = await handlerMap.handleGet({_id: id});
            if (result.ok) {
                setListId(result.data._id);
                setShow(true);
            }
        }
    }

    return (
        <>
            <div style = {{justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
                {lists.length ? (
                    lists.filter(item => ( condition ? item.archived === false && item.members.includes(userId) : item.members.includes(userId) )).map(obj => (
                        <div key = {obj._id}>
                            <Card style={{width: '300px', minHeight: '130px'}} onClick = {() => handleClick(obj._id)}>
                                <Card.Header style = {{
                                        maxWidth: '300px', 
                                        display: 'flex', 
                                        whiteSpace: 'nowrap'
                                    }}>
                                    <div style = {{
                                        maxWidth: '240px', 
                                        overflow: 'hidden', 
                                        textOverflow: 'ellipsis', 
                                        whiteSpace: 'nowrap', 
                                        marginRight: '5px'
                                    }}>
                                        {obj.title === '' ? "bezejmenný" : obj.title}
                                    </div>

                                    {obj.archived &&
                                        <i style = {{paddingTop: '1px'}} className = 'bi bi-archive-fill'/>
                                    }
                                    {obj.owner === userId &&
                                        <i style = {{marginLeft: '5px', paddingTop: '1px'}} className = 'bi bi-person-bounding-box'/>
                                    }
                                </Card.Header>

                                <Card.Body>

                                    <ListGroup style = {{display: "flex"}}>

                                        {obj.items.filter(item => item.status === false).length !== 0 ?
                                            <>
                                                {obj.items.filter(item => item.status === false).slice(0, 3).map((item) => 
                                                    <div key = {item._id}>
                                                        <ListGroup.Item style = {{display: "flex"}}>
                                                            <Button variant = 'light' style = {{background: 'transparent', marginRight: '5px'}} onClick = {(e) => {
                                                                e.stopPropagation();
                                                                handleStatus(item._id, obj._id);
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
                                            :
                                            <p style = {{display: 'flex', justifyContent: 'center', opacity: '80%'}}>
                                                {obj.items.length ? 'hotový seznam' : 'prázdný seznam'}
                                            </p>
                                        }

                                        {obj.items.filter(item => item.status === false).length > 3 &&
                                            <ListGroup.Item>
                                                <p>+ 
                                                    {obj.items.filter(item => item.status === false).length - 3}

                                                    {obj.items.filter(item => item.status === false).length - 3 > 1 ? 
                                                        (obj.items.filter(item => item.status === false).length - 3 > 4 ? 
                                                        " nekompletních položek" : " nekompletní položky")
                                                    : " nekompletní položka"}
                                                </p>
                                            </ListGroup.Item>
                                        }
                                    </ListGroup>

                                </Card.Body>
                            </Card>
                            
                            {listId === obj._id &&
                                <ShoppingList
                                    users = {users}
                                    shopList = {obj}
                                    userId = {userId}
                                    lists = {lists}
                                    setLists = {setLists}
                                    show = {show}
                                    setShow = {setShow}
                                />
                            }
                        </div>
                    ))
                ) : <p>prázdná stránka, přidejte si první stránku</p>}
            </div>
        </>
    )
}

export default Cards