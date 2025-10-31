import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import arraySort from './array-sort';

function bodyBottom(list) {
    const array = arraySort(list);
    const [hide, setHide] = useState(true);
    return (
        <>
            <ListGroup>
                {array.map((item) => {
                    <ListGroup.Item key = {item.name}>
                        <Button></Button>

                        {item.name}

                        <Button></Button>
                        </ListGroup.Item>
                })}
            </ListGroup>
        </>
    )
}

export default bodyBottom