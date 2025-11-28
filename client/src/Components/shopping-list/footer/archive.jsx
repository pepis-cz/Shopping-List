import Button from 'react-bootstrap/Button'

function Archive({ archived, setValue }) {

    const handleClick = () => {
        setValue(prev => ({...prev, archived: !prev.archived}));
    }

    return (
        <Button style={{
            background: "transparent"
        }} 
            variant = 'light' 
            size = 'lg' 
            onClick = {handleClick}
        >
            { archived ? <i className = 'bi bi-archive-fill'/> : <i className = 'bi bi-archive'/> }
        </Button>
    )
}

export default Archive