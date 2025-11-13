import Button from 'react-bootstrap/Button'
import Card from './card';

function Toggle({ lists }) {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <>
            <Button variant = 'light' onClick = {handleToggle}>
                {toggle ? "Skrýt archivované" : "Zobrazit archivované"}
            </Button>

            {toggle && (
                lists.filter((item) => item.archived === true).map((item) =>
                    <Card users = {users} shopList = {item} userId = {userId}/>
                )
            )}
        </>
    )
}

export default Toggle