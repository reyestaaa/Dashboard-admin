import React from 'react';
import "./index.css";
import { BsCaretRightFill } from "react-icons/bs";
import SidebarUser from '../Components/Sidebar';

function Detail() {
    return (
        <div className="container-fluid">
            <div className="row">
                <SidebarUser />

                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom text-muted fs-5 mt-2 fw-bold">
                        <p className="">Event <BsCaretRightFill /> Training</p>
                    </div>
                    <div className="container">
                        {/* Link tabs */}
                        <div className="row">
                            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                <div className="col-lg-6">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-bold border-0 fs-5 active" id="detail-program-tab" data-bs-toggle="tab" data-bs-target="#detail-program" type="button" role="tab" aria-controls="detail-program" aria-selected="true">Detail Program</a>
                                    </li>
                                </div>
                                <div className="col-lg-6">
                                    <a className="btn btn-secondary mt-3 fs-6 fw-bold buttondetail" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Register
                                    </a>
                                </div>
                            </ul>
                        </div>
                        <div className="content">

                        </div>
                        {/* Tabs */}
                        <div className="tab-content " id="myTabContent">

                            {/* detail program */}
                            <div className="tab-pane fade show active mt-4" id="detail-program" role="tabpanel" aria-labelledby="detail-program-tab">
                                <div className= "row">
                                    <div className= "col-lg-6">
                                        <h4 className='fw-bold'>Program Name</h4>
                                        <p> Business Analyst Program</p>
                                    </div>
                                    <div className= "col-lg-6">
                                        <h4 className='fw-bold'>Program Type</h4>
                                        <p>-</p>
                                    </div>
                                </div>
                                
                                
                                <h4 className='fw-bold'>Program Description </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, mauris in est imperdiet in amet, est malesuada massa. Quis blandit scelerisque donec mattis. Viverra sed ut integer et egestas interdum sociis. Arcu interdum interdum aliquam diam enim nulla dolor justo, eleifend.</p>
                                <div className= "row">
                                    <div className="col-lg-6">
                                        <h4 className='fw-bold'>Location Type</h4>
                                        <p>Onsite</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4 className='fw-bold'>Location</h4>
                                        <p>Universitas Indonesia</p>
                                    </div>
                                </div>
                                <h4 className='fw-bold'>Trainer Name</h4>
                                <p>Jonatan Liem and Erika Kamberlin</p>
                                <h4 className='fw-bold'>Program Type</h4>
                                <p>100 Participant</p>
                                <h4 className='fw-bold'>Date and Time</h4>
                                <p>

                                    <span className="me-4">Start date : 24 March 2012</span>  Start date : 24 March 2022  <br />
                                    <span className="mo-4">End Date : 31 March 2022</span> End Time : 03.00 PM

                                </p>

                                <h4 className='fw-bold'>Close Registration</h4>
                                <p> <span className="me-4">Date : 24 March 2012</span>  Time : 11.59 AM</p>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Detail;