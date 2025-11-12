import Button from 'react-bootstrap/Button'
import Render from './item-render'
import { useState } from 'react'

function Body({ items }) {

    const[array, setArray] = useState(items ?? [])
    const [visibility, setVisibility] = useState(true);
    const [editingId, setEditingId] = useState(null);

    const handleCreate = () => {
        setEditingId(null);
        const newItem = {
            id: array.length ? Math.max(...array.map((item) => item.id)) + 1 : 1,
            name: null,
            status: false
        }

        setArray(prev => ([...prev, newItem]));
        setEditingId(newItem.id);
    };

    return (
        <>
            <div className = 'body1'>
                <Render array = {array} setArray = {setArray} editingId = {editingId} setEditingId = {setEditingId} boolean = {false}/>

                <Button variant = 'light' size = 'lg' onClick = {handleCreate}>
                    <i className = 'bi bi-plus'/> Přidat položku
                </Button>
            </div>

            <div className = 'body2'>
                <Button variant = 'light' size = 'lg' onClick = {() => {setVisibility(!visibility)}}>
                    {visibility ? (
                        <>Skrýt hotové položky <i className = 'bi bi-chevron-up'/> </>
                    ) : (
                        <>Zobrazit hotové položky <i className = 'bi bi-chevron-down'/> </>
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