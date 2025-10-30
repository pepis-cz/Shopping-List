import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function toggleButton (item) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <Button className = 'toggle' onClick = { () => { setToggle(!toggle) } }>
                {toggle ? (
                    <>Skrýt <i class = 'bi bi-chevron-up'/> </>
                ) : (
                    <>Zobrazit <i class = 'bi bi-chevron-down'/> </>
                )}
            </Button>
        </>
    )
}

export default toggleButton;