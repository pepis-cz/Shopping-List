function Archive(archived) {
    const [archived, setArchived] = useState(archived);

    const handleClick = () => {
        setArchived(!archived);
    }

    return (
        <Button onClick = {handleClick}>
            { archived ? <i className = 'bi bi-recycle'/> : <i className = 'bi bi-archive'/> }
        </Button>
    )
}

export default Archive