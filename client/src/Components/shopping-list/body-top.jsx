import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import arraySort from './array-sort';

function bodyTop(list) {
    const array = arraySort(list, true);
    const [hide, setHide] = useState(true);
    return (
        <>
            <Button onClick = {() => {setHide(!hide)}}>
                {toggle ? (
                    <>Skrýt <i class = 'bi bi-chevron-up'/> </>
                ) : (
                    <>Zobrazit <i class = 'bi bi-chevron-down'/> </>
                )}
            </Button>
    
            {hide ? (<></>) : (
                <ListGroup>
                    {array.map((item) => {
                        <ListGroup.Item key = {item.id}>
                            <Button className = 'checkbox'>

                            </Button>

                            {item.name}

                            <Button className = 'delete'></Button>
                            </ListGroup.Item>
                    })}
                </ListGroup>
            )}
        </>
    )
}

export default bodyTop