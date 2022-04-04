import React from 'react';
import Sidebar from "../../Components/Sidebar";

function Index(props) {
    return (
<div className="container-fluid">
    <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4 mt-5 mt-lg-0 ">
            <div className=" justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3 border-bottom">
                <div className="d-flex text-muted fs-5 mt-2 fw-bold p-3 justify-content-between">
                    <p className="">Training > Trainer</p>
                    <button type="button" className="btn btn-secondary btn-sm fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal1">+ Add Trainer</button>
                </div>
            
                <div className="table-responsive p-2">
                    <table className="table">
                        <thead>
                                <tr>
                                <th scope="col">Trainer</th>
                                <th scope="col">Program</th>
                                <th scope="col">Email</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                <td> <img src="./image/Ellipse.png" alt="" className="img-fluid" /> Jonatan Liem</td>
                                <td>Business Analyst</td>
                                <td>Jonatan@gmail.comr</td>
                                <td> 
                                    <div className="dropdown ">
                                        <a className="fw-bold fs-4 text-dark text-decoration-none" href="#"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                        </a>
                                        <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item bg-success" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Edit</a></li>
                                        </ul>
                                    </div>
                                </td>
                                
                                </tr>
                                <tr>
                                <td> <img src="./image/Ellipse.png" alt="" className="img-fluid" /> Jonatan Liem</td>
                                <td>Business Analyst</td>
                                <td>Jonatan@gmail.comr</td>
                                <td> 
                                    <div className="dropdown ">
                                        <a className="fw-bold fs-4 text-dark text-decoration-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                        </a>
                                        <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                        </ul>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td> <img src="./image/Ellipse.png" alt="" className="img-fluid" /> Jonatan Liem</td>
                                <td>Business Analyst</td>
                                <td>Jonatan@gmail.comr</td>
                                <td> 
                                    <div className="dropdown ">
                                        <a className="fw-bold fs-4 text-dark text-decoration-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                        </a>
                                        <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                        </ul>
                                    </div>
                                </td>
                                </tr>
                                
                        </tbody>
                    </table>
                </div>
                <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="exampleModalLabel">Edit Trainer</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="trainer-name" className="col-form-label">*Trainer Name</label>
                                    <input type="name" className="form-control" id="trainer-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="program-name" className="col-form-label">*Program Name</label>
                                    <input type="text" className="form-control" id="program-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal1"  aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="exampleModalLabel"> Add Trainer</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="trainer-name" className="col-form-label">*Trainer Name</label>
                                    <input type="name" className="form-control" id="trainer-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="program-name" className="col-form-label">*Program Name</label>
                                    <input type="text" className="form-control" id="program-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
    );
}

export default Index;