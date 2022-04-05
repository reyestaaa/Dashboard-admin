import React from "react";
import Sidebar from "../../Components/Sidebar";
import {Link} from "react-router-dom"
import { Button } from "react-bootstrap";
import swal from 'sweetalert';

function Index(props) {
  return(
    <div className="container-fluid">
        <div className="row">
            <Sidebar />

        <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div className="row">
                    <div className="col-md-8 border-end">

                        {/* title */}
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
                            <div className="d-flex text-muted fs-5 mt-2 fw-bold">
                                <p>Training > Schadule</p>
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
                                    <div className="content">
                                        {/* Dropdown */}
                                        <div className="dropdown mb-5 text-end">
                                            <a className="text-decoration-none fs-4 text-dark fw-bold" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            ...
                                            </a>
                                            {/* Link modal */}
                                            <ul className="dropdown-menu bg-success border-0" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Edit</a></li>
                                                <li><a className="dropdown-item fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal1" href="#">Reschadule</a></li>
                                                <li><Button className="dropdown-item fw-bold"  onClick={() => onDelete()}>Delete</Button></li>
                                            </ul>
                                        </div>


                                        <div className="img-card d-flex">
                                            <img src="./image/Ellipse.png" alt="" className="img-fluid" />
                                            <img src="./image/Ellipse.png" alt="" className="img-fluid" />
                                            <img src="./image/Ellipse.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>

                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title fw-bold" id="exampleModalLabel">Edit Schedule</h5>
                                                <Button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                <div className="mb-3">
                                                    <label for="program-name" className="col-form-label">*Program Name</label>
                                                    <input type="text" className="form-control bg-secondary" placeholder="Choose Program" id="program-name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="description" className="col-form-label">*Description</label>
                                                    <textarea className="form-control bg-secondary" placeholder="Choose class" id="description"></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="program-type" className="col-form-label ">*Program Type</label>
                                                    <select className="form-select bg-secondary" placeholder="" id='program-type' aria-label="Default select example">
                                                        <option selected>Choose program type</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="trainer" className="col-form-label">*Trainer</label>
                                                    <input type="text" className="form-control bg-secondary" placeholder="Choose Trainer" id="trainer" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="total-participant" className="col-form-label">*Total Participant</label>
                                                    <input type="number" className="form-control bg-secondary" placeholder="Total Participant" id="total-participant" />
                                                </div>
                                                
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <Button onClick={() => Edit()} className="btn btn-primary">Save</Button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade " id="exampleModal1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title fw-bold" id="exampleModalLabel">Rechedule</h5>
                                                <Button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                <div className="row">
                                                    <div className="col-md-10 mb-3">
                                                        <div className="row mt-2">
                                                            <h5>Date and Time</h5>
                                                            <div className="col-md-6 mb-3">
                                                                <label for="start-date" className="col-form-label">*Start Date</label>
                                                                <input type="date" className="form-control bg-secondary" id="start-date" />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label for="end-date" className="col-form-label">*End Date</label>
                                                                <input type="date" className="form-control bg-secondary" id="end-date" />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label for="start-time" className="col-form-label">*Start Time</label>
                                                                <input type="time" className="form-control bg-secondary" id="start-time" />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label for="end-time" className="col-form-label">*End Time</label>
                                                                <input type="time" className="form-control bg-secondary" id="end-time" />
                                                            </div>
                                
                                                        </div>
                                                        <div className="row mt-4">  
                                                            <h5>Close Registration</h5>
                                                            <div className="col-md-6 mb-3">
                                                                <label for="date" className="col-form-label">*Date</label>
                                                                <input type="date" className="form-control bg-secondary"  id="date" />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label for="time" className="col-form-label">*Time</label>
                                                                <input type="time" className="form-control bg-secondary"  id="time" />
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 position-absolute bottom-0 mb-5 end-0">
                                                        <Button onClick={() => Reschadule()} className="btn btn-primary">Save</Button>
                                                    </div>
                                                </div>
                                                
                                                </form>
                                            </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal */}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Kalender */}
                    <div className="col-md-4">

                        <div className="" dangerouslySetInnerHTML={{ __html: "<iframe src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&src=bXVoYW1tYWRhZHJpYW5yZXllc3RhOWRAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTE4MDIyODUwMjM1MDQwNDk0NDc1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=aWQuaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2xhc3Nyb29tMTEwMjg0NjQyMDM1Mjc2ODMzNTEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEwNTQzODQ0NTk2NDkyODYyNDA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1MDAxMDMyMDU0MTI5ODk5MTQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1ODIzNjg4ODcyNzA0NjEwMjk0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAyNzcyNTI0MjkwNTk1OTU5ODIyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE2MzQwMzIxNjA5MzEzNzk0ODUzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE1MDUxOTA3OTUxNTg2NTAzMjk5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEzMDQ1OTI4MDIwMzYxOTcxNTg2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEwNDIxNTczMzA4ODQ4MjEyODM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%237627bb&color=%230B8043&color=%23b80672&color=%23202124&color=%23174ea6&color=%23c26401&color=%23007b83&color=%230047a8&color=%23c26401&color=%23c26401&color=%23202124' height=300   /> "}} />
                    
                    </div>

                </div> 
            </div>
        </main>
        </div>
    </div>
  )
}

// Delete sweetAlert
const onDelete = value => {
    swal({
        title: "Are you sure?",
        buttons: true,
        successMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your Schadule file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Schadule file is safe!");
        }
      });
}
const Edit = value => {
    swal({
        title: "Edited successfully!!",
        icon: "success",
    })
    .then(function() {
        window.location = "http://localhost:3000/schadule";
    });
}
const Reschadule = value => {
    swal({
        text: "The schedule change was successful!",
        icon: "success",
    })
    .then(function() {
        window.location = "http://localhost:3000/schadule";
    });
}




export default Index;
