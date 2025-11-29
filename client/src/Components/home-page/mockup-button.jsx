import Button from 'react-bootstrap/Button'

function MockupButton({ serverData, setServerData, setLists, setListId }) {
    
    const handleToggle = () => {

        setServerData(!serverData);

        if(serverData === true) {
            async () => {
                const result = await handlerMap.handleList({_id: userId});

                if (result.ok) {
                    setLists(result.data.cards);
                    setListId(result.data.list);
                }
            }
        }else{
            setLists(shopLists);
            setListId(null);
        }
    }

    return (
        <div style = {{display: 'flex'}}>
            <p>mockup data</p>
            <Button variant = 'light' style = {{background: 'transparent'}} onClick = {handleToggle}>
                {serverData ? <i className = 'bi bi-toggle-on'/> : <i className = 'bi bi-toggle-off'/>}
            </Button>
        </div>
    )
}

export default MockupButton