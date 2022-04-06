import SidebarUser from "../Components/Sidebar";
import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import swal from 'sweetalert';
import { BsCaretRightFill } from "react-icons/bs";

function UserPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <div className="row">
                            <div className="col-md-8 border-end"></div>

                            {/* title */}
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
                                <div className="d-flex text-muted fs-5 mt-2 fw-bold">
                                    <p>Event <BsCaretRightFill /> Training</p>
                                </div>
                            </div>

                            {/* Event date */}
                            <div className="d-flex bd-highlight mb-3 fw-bold">
                                <div className=" bd-highlight">
                                    <h2 className="fw-bold">March 2022</h2>
                                    <p>Today is Wednesday, Mar 20th 2022    </p>
                                </div>
                                <div className="ms-auto bd-highlight">
                                    <Link to="/schadule/add" className="btn btn-secondary fw-bold shadow">
                                        + Create Event
                                    </Link>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="row p-3">
                                <div className="card bg-info col-md-12 shadow border-0">
                                    <div className="card-body d-flex justify-content-between">
                                        <div className="title">
                                            <Link className="fs-4 text-decoration-none text-dark fw-bold" to="/schadule/content">Business Analyst</Link>
                                            <p>20 - 31 March 2022   </p>
                                            <br />
                                            <p>Close registration : 19 March 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default UserPage;