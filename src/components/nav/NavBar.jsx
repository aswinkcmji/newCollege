import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
function NavBar() {

    const logout = () => {
        localStorage.removeItem('token-user');
        
    };
    
  return (
    <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light ">
                <Link to={" "} className="navbar-brand text-danger " >Emergency Now</Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item  ">
                            <Link className="nav-link m-2"  to={""}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2"  to={"/Home2/About"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2"  to={"/Home2/Service"}>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2"  to={"/Home2/Contact"}>Contact</Link>
                        </li>
                    </ul>
                    <Link to={'/Home2/Registration'}>
                        <button type="button" className="m-2 btn btn-danger">Add Service</button>
                    </Link>
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle navbar-account" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <Icon fontSize={20} icon="ic:baseline-account-circle" /><span>Account</span>
                        </button>
                        <div class="dropdown-menu">
                            <Link to={""} className="dropdown-item text-danger navbar-account-link" ><Icon className='navbar-account-icon' fontSize={20} icon="eva:edit-outline" /><span>Edit</span></Link>
                            <Link to={""} className="dropdown-item text-danger navbar-account-link" ><Icon className='navbar-account-icon' fontSize={20} icon="emojione-monotone:cross-mark-button" /><span>Delete Account</span></Link>
                            <Link onClick={logout} to={"/Login"} className="dropdown-item text-danger navbar-account-link" ><Icon className='navbar-account-icon' fontSize={20} icon="ant-design:logout-outlined" /><span>Logout</span></Link>
                        </div>
                    </div>
                    
                </div>
            </nav>  
    </div>
  )
}
export default NavBar