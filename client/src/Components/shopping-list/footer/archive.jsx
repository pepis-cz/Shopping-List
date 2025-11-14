import Button from 'react-bootstrap/Button'

function Archive({ archived, lists, setLists, id}) {
    const handleClick = () => {
        const updateList = lists.map((item) => item.id === id ? {...item, archived: !item.archived} : item);
        setLists(prev => [...prev, updateList]);
    }

    return (
        <Button style={{
            background: "transparent"
        }} 
            variant = 'light' 
            size = 'lg' 
            onClick = {handleClick}
        >
            { archived ? <i className = 'bi bi-recycle'/> : <i className = 'bi bi-archive'/> }
        </Button>
    )
}

export default Archive