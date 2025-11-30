import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { sListContext } from '../provider/sList'

function MockupButton({ serverData, setServerData, setLists, setListId, shopLists, userId, lists }) {

    const { handlerMap } = useContext(sListContext);
    
    const handleToggle = async () => {
        if(!serverData) {
            const result = await handlerMap.handleList({_id: userId});
            if (result.ok) {
                setLists(result.data.cards);
                setListId(result.data.list);
            }
        }else{
            setListId(null);
            setLists(shopLists);
        }
        setServerData(prev => !prev);
    }

    return (
        <div style = {{display: 'flex'}}>
            <p>mockup data</p>
            <Button variant = 'light' size = 'lg' style = {{background: 'transparent'}} onClick = {handleToggle}>
                {serverData ? <i className = 'bi bi-toggle2-on'/> : <i className = 'bi bi-toggle2-off'/>}
            </Button>
        </div>
    )
}

export default MockupButton