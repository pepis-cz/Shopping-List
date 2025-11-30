import Button from 'react-bootstrap/Button'
import { customAlphabet } from 'nanoid';
import { useContext } from 'react'
import { sListContext } from '../provider/sList'

function AddList({ userId, setLists, setShow, setListId }) {

    const { handlerMap, serverData, user } = useContext(sListContext);

    const handleAdd = async () => {
        if(!serverData) {
            const newList = {
                _id: customAlphabet("0123456789abcdef", 24)(),
                title: '',

                items: [],

                owner: userId,
                members: [userId],
                archived: false
            };
            setLists(prev => [...prev, newList]);
            setListId(newList._id);
            setShow(true);
        }else{
            const result = await handlerMap.handleCreate({_id: userId});
            if (result.ok) {
                setLists(prev => [...prev, result.data]);
                setListId(result.data._id);
                setShow(true);
            }
        }
    }

    return (
        <>
            <div style = {{display: 'flex', justifyContent: 'center', marginTop: '50px', paddingBottom: "25px"}}>
                <Button variant = 'secondary' size = 'lg' onClick = {handleAdd}>
                    Přidat seznam
                </Button>
            </div>
        </>
    )
}

export default AddList