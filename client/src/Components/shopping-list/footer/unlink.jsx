import Button from 'react-bootstrap/Button'
import { useState, useContext } from 'react'
import { sListContext } from '../../provider/sList';

function Unlink({ members, userId, id, setLists, setShow, serverData }) {

const { handlerMap } = useContext(sListContext);

    const [member, setMember] = useState(members);

    const handleDelete = async () => {
        if (!serverData) {
            setShow(false);
            setMember(prev => {
                const update = prev.filter(item => item !== userId);
                setLists(prev => prev.map(item => item._id === id ? {...item, members: update} : item));
                return update;
            });
        }else{
            setMember(prev => {
                const change = prev.filter(item => item !== userId);
                return change;
            });

            const object = {
                _id: id,
                members: [member]
            }
            
            const result = await handlerMap.handleUpdate({object: object});
            if (result.ok) {
                setShow(false);
                setLists(result.data.cards);
            }
        }
    }

    return (
        <Button style={{
            background: "transparent"
        }}
            variant = 'light'
            size = 'lg'
            onClick = {handleDelete}
        >
            <i className = 'bi bi-node-minus'/>
        </Button>
    )
}

export default Unlink