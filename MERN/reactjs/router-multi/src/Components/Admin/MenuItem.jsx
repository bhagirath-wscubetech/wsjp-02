import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai"
import { Link } from 'react-router-dom';
const MenuItem = ({ name, url, child }) => {

    const [toggle, setToggle] = useState(false);

    const binaChildWaliList = <li className='my-2' style={
        {
            cursor: "pointer"
        }
    }>
        <Link to={url} className='nav-link'>
            {name}
        </Link>
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
                                    <Link to={c.url} className='nav-link'>
                                        {c.name}
                                    </Link>
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
