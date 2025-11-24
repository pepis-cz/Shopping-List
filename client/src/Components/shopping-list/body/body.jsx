import Button from 'react-bootstrap/Button'
import Render from './item-render'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

function Body({ items, setValue }) {

    const [visibility, setVisibility] = useState(true);
    const [editingId, setEditingId] = useState(null);

    const [array, setArray] = useState(items);

    const handleCreate = () => {
        setEditingId(null);
        const newItem = {
            id: array.length ? Math.max(...array.map((item) => item._id)) + 1 : 1,
            name: null,
            status: false
        }

        setArray(prev => {
            const newArray = [...prev, newItem];
            setValue(prev => ({...prev, items: newArray}));
            return newArray;
        });
        setEditingId(newItem._id);
    };

    return (
        <Modal.Body>
            <div>
                <Render 
                    array = {array} 
                    setArray = {setArray} 
                    editingId = {editingId} 
                    setEditingId = {setEditingId} 
                    boolean = {false}
                    setValue = {setValue}
                />

                <Button style={{background: "transparent"}} variant = 'light' size = 'lg' onClick = {handleCreate}>
                    <i className = 'bi bi-plus'/> Přidat položku
                </Button>
            </div>

            <div>
                {array.length ?
                    <Button style = {{
                        background: "transparent"
                    }} 
                        variant = 'light'
                        size = 'lg' 
                        onClick = {() => {setVisibility(!visibility)}}
                    >
                        {visibility ? (
                            <>Skrýt hotové položky <i className = 'bi bi-chevron-up'/> </>
                        ) : (
                            <>Zobrazit hotové položky <i className = 'bi bi-chevron-down'/> </>
                        )}
                    </Button>
                : null}

                {visibility &&
                    <Render 
                        array = {array} 
                        setArray = {setArray} 
                        editingId = {editingId} 
                        setEditingId = {setEditingId} 
                        boolean = {true}
                        setValue = {setValue}
                    />
                }
            </div>
        </Modal.Body>
    )
}

export default Body