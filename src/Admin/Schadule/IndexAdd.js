import React from 'react';
import Sidebar from "../../Components/Sidebar";
import swal from 'sweetalert';
import { BsCaretRightFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function IndexAdd(props) {

    const [programname, setProgramname] = useState('');
    const [description, setDescription] = useState('');
    const [locationtype, setLocationtype] = useState('');
    const [location, setLocation] = useState('');
    const [trainernames, setTrainernames] = useState('');
    const [totalparticipant, setTotalparticipant] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [dateclose, setDateclose] = useState('');
    const [timeclose, setTimeclose] = useState('');

    // const navigate = useNavigate();

    const saveEvent = async (e) => {
        e.preventDefault();
        const eventNew = {
            programname: programname,
            description: description,
            locationtype: locationtype,
            location: location,
            trainernames: trainernames,
            totalparticipant: totalparticipant,
            startdate: startdate,
            enddate: enddate,
            starttime: starttime,
            endtime: endtime,
            dateclose: dateclose,
            timeclose: timeclose
        }
        
        // await fetch(`http://localhost:8080/event`, {
        //     method: "POST",
        //     body: JSON.stringify(eventNew),
        //     headers: {
        //         "Content-Type": 'application.json'
        //     }
        // });
        // navigate.push("/");

        
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h5 text-muted">Training <BsCaretRightFill /> Schadule <BsCaretRightFill /> Create Event</h1>
                    </div>

                    {/* form */}
                    <form action="" onSubmit={saveEvent}>
                        <div className="row">

                            {/* create event */}
                            <div className="col-md-7 border-end border-3" >
                                <h3>Create Event</h3>
                                <p>Detail Program</p>
                                <div className="mb-3">
                                    <label for="program-name" className="col-form-label"><span style={{ color: "red" }}>*</span>Program Name</label>
                                    <input type="text" className="form-control bg-secondary" value={programname} onChange={(e) => setProgramname(e.target.value)} placeholder='Program Name'></input>
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="col-form-label"><span style={{ color: "red" }}>*</span>Descriptions:</label>
                                    <textarea className="form-control bg-secondary" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description Program'></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="location-type" className="col-form-label"><span style={{ color: "red" }}>*</span>Location Type</label>
                                    <select className="form-select bg-secondary" value={locationtype} onChange={(e) => setLocationtype(e.target.value)} aria-label="Default select example">
                                        <option selected>Choose Program Type</option>
                                        <option value="1">Online</option>
                                        <option value="2">Onsite</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="program-name" className="col-form-label"><span style={{ color: "red" }}>*</span>Location</label>
                                    <input type="text" className="form-control bg-secondary" value={location} onChange={(e) => setLocation(e.target.value)}  placeholder='Location'></input>
                                </div>
                                
                            </div>
                            <div className="col-md-5">
                            <div className="mb-3">
                                    <label for="trainer-name" className="col-form-label"><span style={{ color: "red" }}>*</span>Trainer names</label>
                                    <input type="name" className="form-control bg-secondary" value={trainernames} onChange={(e) => setTrainernames(e.target.value)} placeholder='Choose Trainer'></input>
                                </div>
                                <div className="mb-3">
                                    <label for="number-patisipan" className="col-form-label"><span style={{ color: "red" }}>*</span>Total Participant</label>
                                    <input type="number" className="form-control bg-secondary" value={totalparticipant} onChange={(e) => setTotalparticipant(e.target.value)} placeholder='Total Participant'></input>
                                </div>
                                <div className="row mt-2">
                                    <h5>Date and Time</h5>
                                    <div className="col-md-6 mb-3">
                                        <label for="start-date" className="col-form-label"><span style={{ color: "red" }}>*</span>Start Date</label>
                                        <input type="date" className="form-control bg-secondary" value={startdate} onChange={(e) => setStartdate(e.target.value)}  />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="end-date" className="col-form-label"><span style={{ color: "red" }}>*</span>End Date</label>
                                        <input type="date" className="form-control bg-secondary" value={enddate} onChange={(e) => setEnddate(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="start-time" className="col-form-label"><span style={{ color: "red" }}>*</span>Start Time</label>
                                        <input type="time" className="form-control bg-secondary" value={starttime} onChange={(e) => setStarttime(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="end-time" className="col-form-label"><span style={{ color: "red" }}>*</span>End Time</label>
                                        <input type="time" className="form-control bg-secondary" value={endtime} onChange={(e) => setEndtime(e.target.value)} />
                                    </div>

                                </div>
                                <div className="row mt-4">
                                    <h5>Close Registration</h5>
                                    <div className="col-md-6 mb-3">
                                        <label for="date" className="col-form-label"><span style={{ color: "red" }}>*</span>Date</label>
                                        <input type="date" className="form-control bg-secondary" value={dateclose} onChange={(e) => setDateclose(e.target.value)}/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="time" className="col-form-label"><span style={{ color: "red" }}>*</span>Time</label>
                                        <input type="time" className="form-control bg-secondary" value={timeclose} onChange={(e) => setTimeclose(e.target.value)}/>
                                    </div>

                                </div>
                                <a onClick={() => SuccessAdd(saveEvent)} className="btn btn-primary mt-3 text-end">Publish</a>
                            </div>

                        </div>
                    </form>

                </main>
            </div>
        </div>
    );
}

const SuccessAdd = () => {
    swal({
        title: "Well Done!",
        text: "You have successfully created!",
        icon: "success",
    })
        .then(function () {
            window.location = "http://localhost:3000/schadule";
        });

}

export default IndexAdd;