import React from "react"
import { Link } from "react-router-dom"


const HeaderMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/locations">Locations</Link> 
                </li>
                <li>
                    <Link to="/orders">Orders</Link>    
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMenu