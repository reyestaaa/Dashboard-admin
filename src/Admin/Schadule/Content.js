import React from 'react';
import Sidebar from "../../Components/Sidebar";

function Content(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                
                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom text-muted fs-5 mt-2 fw-bold">
                        <p className="">Training > Schadule</p>
                    </div>
                        <div className="container">
                            {/* Link tabs */}
                            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link fw-bold border-0 fs-5 active" id="detail-program-tab" data-bs-toggle="tab" data-bs-target="#detail-program" type="button" role="tab" aria-controls="detail-program" aria-selected="true">Detail Program</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link fw-bold border-0 fs-5" id="partisipan-tab" data-bs-toggle="tab" data-bs-target="#partisipan" type="button" role="tab" aria-controls="partisipan" aria-selected="false">Participant</a>
                                </li>
                                
                            </ul>
                            {/* Tabs */}
                            <div className="tab-content " id="myTabContent">

                                {/* detail program */}
                                <div className="tab-pane fade show active mt-4" id="detail-program" role="tabpanel" aria-labelledby="detail-program-tab">
                                <h4 className='fw-bold'>Program Name</h4>
                                <p> Business Analyst Program</p>
                                <h4 className='fw-bold'>Program Description </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, mauris in est imperdiet in amet, est malesuada massa. Quis blandit scelerisque donec mattis. Viverra sed ut integer et egestas interdum sociis. Arcu interdum interdum aliquam diam enim nulla dolor justo, eleifend.</p>
                                <h4 className='fw-bold'>Date and Time</h4>
                                <p>
                        
                                    <span className="me-4">Start date : 24 March 2012</span>  Start date : 24 March 2022  <br /> 
                                    <span className="me-4">Start date : 24 March 2012</span>  Start date : 24 March 2022
                        
                                </p>
                        
                                <h4 className='fw-bold'>Close Registration</h4>
                                <p> <span className="me-4">Start date : 24 March 2012</span>  Start date : 24 March 2022</p>
                                <h4 className='fw-bold'>Program Type</h4>
                                <p>Online</p>
                                <h4 className='fw-bold'>Trainer Name</h4>
                                <p>Jonatan Liem and Erika Kamberlin</p>
                                <h4 className='fw-bold'>Program Type</h4>
                                <p>100 Participant</p>
                        
                                </div>
                                {/* partisipan */}
                                <div className="tab-pane fade" id="partisipan" role="tabpanel" aria-labelledby="partisipan-tab">
                                <h4 className="text-end"> 5 / 100</h4>
                                    <div className="table-responsive">
                                        <table className="table table-sm">
                                        <thead>
                                            <tr>
                                            <th scope="col">Participant Name</th>
                                            <th scope="col">Program</th>
                                            <th scope="col">No. Telepn</th>
                                            <th scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Jonatan Liem</td>
                                            <td>Business Analyst</td>
                                            <td>081236789789</td>
                                            <td>Jonatan@gmail.comr</td>
                                            </tr>
                                            <tr>
                                            <td>Jonatan Liem</td>
                                            <td>Business Analyst</td>
                                            <td>081236789789</td>
                                            <td>Jonatan@gmail.comr</td>
                                            </tr>
                                            <tr>
                                            <td>Jonatan Liem</td>
                                            <td>Business Analyst</td>
                                            <td>081236789789</td>
                                            <td>Jonatan@gmail.comr</td>
                                            </tr>
                                            <tr>
                                            <td>Jonatan Liem</td>
                                            <td>Business Analyst</td>
                                            <td>081236789789</td>
                                            <td>Jonatan@gmail.comr</td>
                                            </tr>
                                            
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                </main>
            </div>
        </div>
    );
}

export default Content;