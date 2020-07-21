import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



const Menu = () => {

    let loc = useLocation()


    // const [location,setLocation] = useState({})

    // useEffect(() => {
        
    //     setLocation(loc);
    //     console.log(location)
    // }, [])
    return (

            <div class="col-sm-4 col-lg-3">
                <nav id="navbar-example3" className="navbar navbar-light bg-light flex-column mt-4">
                <a className="navbar-brand" href="#">Computer Science</a>
                <nav className="nav nav-pills flex-column">
                    <Link className={`nav-link ${loc.pathname === '/department/cse/' ? "active" : ''}`} to="/department/cse/">Department Information</Link>
                    <Link class={`nav-link ${loc.pathname === '/department/cse/hoddesk' ? "active" : ''}`}  to="/department/cse/hoddesk">HOD Desk</Link>
                    <a className="nav-link" href="#item-2">Item2</a>
                    <a className="nav-link" href="#item-3">Item3</a>
                    
                </nav>
                </nav>
            </div>

    );
}

export default Menu;
