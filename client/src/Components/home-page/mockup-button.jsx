import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { sListContext } from '../provider/sList'

function MockupButton({ setLists, setListId, shopLists, userId }) {

    const { handlerMap, serverData, setServerData } = useContext(sListContext);
    
    const handleToggle = async () => {
        setServerData(!serverData);
        if(serverData === false) {
            const result = await handlerMap.handleList({_id: userId});
            if (result.ok) {
                setLists(result.data);
                setListId(null);
            }
        }else{
            setLists(shopLists);
            setListId(null);
        }
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