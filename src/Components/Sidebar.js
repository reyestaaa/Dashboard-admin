import React from 'react';
import {NavLink} from 'react-router-dom';

function Sidebar() {
    return (

       <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <button className="navbar-toggler position-absolute d-md-none collapsed bg-success mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </header>

        <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse p-5">
                <div className="position-sticky pt-3">
                    <h3 className="fw-bold text-center"> <i class='bx bxs-dashboard'></i> Dashboard</h3>
                    <ul className="nav flex-column mt-5">

                        <div className="dropdown  mt-3 text-center">
                            <a className="btn btn-success dropdown-toggle btn-lg shadow-sm fw-bold p-3" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class='bx bx-box'></i> Training
                            </a>

                            <ul className="dropdown-menu bg-primary border-0 mt-1" aria-labelledby="dropdownMenuLink">
                                <li><NavLink exact activeClassName="text-light" className=" dropdown-item   fs-5 mb-3" to="/schadule"> <i class='bx bxs-calendar'></i> Schadule</NavLink></li>
                                <li><NavLink activeClassName="text-light"   className=" dropdown-item   fs-5" to="/trainer"> <i class='bx bxs-user'></i> Trainer</NavLink></li>
                            </ul>
                        </div>

                    </ul>
                </div>
        </nav>
        
       </>

    );
}


export default Sidebar;