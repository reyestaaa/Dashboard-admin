import SidebarUser from "../Components/Sidebar";
import React from "react";
import { Link } from "react-router-dom"
import { BsCaretRightFill } from "react-icons/bs";
import "./index.css"

function UserPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <SidebarUser />
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
                                        <div className="content">
                                            <a className="btn btn-secondary mt-3 fs-6 fw-bold button" href="/detailpage" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Detail
                                            </a>
                                            <a className="btn d-flex mt-4 btn-secondary fs-6 fw-bold button" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Register
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Kalender */}
                        <div className="col-md-4">

                            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTz=0&showCalendars=1&showTabs=1&showPrint=0' height=300   /> " }} />

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default UserPage;