import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai"
const MenuItem = ({ name, url, child }) => {

    const [toggle, setToggle] = useState(false);

    const binaChildWaliList = <li className='my-2' style={
        {
            cursor: "pointer"
        }
    }>
        <a href={url} className='nav-link'>
            {name}
        </a>
    </li>

    const childWaliList = <li onClick={() => setToggle(!toggle)} className='my-2' style={
        {
            cursor: "pointer"
        }
    }>
        {name} <AiFillCaretDown style={
            {
                transform: toggle == true ? 'rotate(180deg)' : 'rotate(0)',
                transition: "400ms"
            }
        } />
        {
            child != null
                ?
                <ul className='text-dark list-unstyled bg-white rounded my-2'
                    style={
                        {
                            height: toggle == true ? 'auto' : '0',
                            transform: toggle == true ? 'scale(1,1)' : 'scale(0,0)',
                        }
                    }
                >
                    {
                        child.map(
                            (c, i) => {
                                return <li className='p-2' key={i}>
                                    <a href={c.url} className='nav-link'>
                                        {c.name}
                                    </a>
                                </li>
                            }
                        )
                    }
                </ul>
                :
                ""
        }

    </li>

    return (
        <>
            {
                url == null
                    ? childWaliList
                    : binaChildWaliList
            }
        </>
    );
}

export default MenuItem;
