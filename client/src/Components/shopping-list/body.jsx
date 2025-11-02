import Button from 'react-bootstrap/Button'
import Render from './item-render'
import { useState } from 'react'

function Body({ items }) {

    const[array, setArray] = useState(items ?? [])
    const [visibility, setVisibility] = useState(true);
    const [editingId, setEditingId] = useState(null);

    const handleCreate = () => {
        const newItem = {
            id: array.length ? Math.max(...array.map((item) => item.id)) + 1 : 1,
            name: '',
            status: false
        }

        setArray(prev => ([...prev, newItem]));
        setEditingId(newItem.id);
    };

    return (
        <>
            <div>
                <Render array = {array} setArray = {setArray} editingId = {editingId} setEditingId = {setEditingId} boolean = {false}/>

                <Button className = 'add-item' onClick = {handleCreate}>
                    <i className = 'bi bi-plus'/> Přidat položku
                </Button>
            </div>

            <div>
                <Button onClick = {() => {setVisibility(!visibility)}}>
                    {visibility ? (
                        <>Skrýt hotové položky<i className = 'bi bi-chevron-up'/> </>
                    ) : (
                        <>Zobrazit hotové položky<i className = 'bi bi-chevron-down'/> </>
                    )}
                </Button>
        
                {visibility &&
                    <Render array = {array} setArray = {setArray} editingId = {editingId} setEditingId = {setEditingId} boolean = {true}/>
                }
            </div>
        </>
    )
}

export default Body