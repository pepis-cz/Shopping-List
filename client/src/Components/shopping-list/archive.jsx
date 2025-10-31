function Archive(dtoIn) {
    const [archived, setArchived] = useState(dtoIn.archived);

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