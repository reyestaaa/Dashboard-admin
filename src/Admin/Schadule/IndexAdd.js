import React from 'react';
import Sidebar from "../../Components/Sidebar";

function IndexAdd(props) {
    return (
    <div className="container-fluid">
        <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h5 text-muted">Training > Schadule > Create Event</h1>
                </div>

                <form action="">
                    <div className="row">
                        
                        <div className="col-md-7 border-end border-3" id>
                        <h3>Create Event</h3>
                        <p>Detail Program</p>
                            <div className="mb-3">
                                <label for="program-name" className="col-form-label">*Program Name</label>
                                <input type="text" className="form-control" id="program-name"></input>
                            </div>
                            <div className="mb-3">
                                <label for="description" className="col-form-label">*Descriptions:</label>
                                <textarea className="form-control" id="description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="program-type" className="col-form-label">*Program Type</label>
                                <select className="form-select" id='program-type' aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="trainer-name" className="col-form-label">*Trainer names</label>
                                <input type="name" className="form-control" id="trainer-name"></input>
                            </div>
                            <div className="mb-3">
                                <label for="number-patisipan" className="col-form-label">*Total Participant</label>
                                <input type="number" className="form-control" id="message-text"></input>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row mt-2">
                                <h5>Date and Time</h5>
                                <div className="col-md-6 mb-3">
                                    <label for="start-date" className="col-form-label">*Start Date</label>
                                    <input type="date" className="form-control" id="start-date" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="end-date" className="col-form-label">*End Date</label>
                                    <input type="date" className="form-control" id="end-date" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="start-time" className="col-form-label">*Start Time</label>
                                    <input type="time" className="form-control" id="start-time" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="end-time" className="col-form-label">*End Time</label>
                                    <input type="time" className="form-control" id="end-time" />
                                </div>
                                
                            </div>
                            <div className="row mt-4">  
                                <h5>Close Registration</h5>
                                <div className="col-md-6 mb-3">
                                    <label for="date" className="col-form-label">*Date</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="time" className="col-form-label">*Time</label>
                                    <input type="time" className="form-control" id="time" />
                                </div>
                                
                            </div>
                            <a className="btn btn-primary mt-3 text-end">Save</a>
                        </div>
                        
                    </div>
                   
                </form>
                
            </main>
        </div>
    </div>
    );
}

export default IndexAdd;