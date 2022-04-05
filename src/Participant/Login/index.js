import { Button, InputGroup } from "react-bootstrap";

function LoginParticipant() {
    return (


        

     <div className="vh-100 colog" >
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4 shadow" style={{ marginTop: "70px" }}>
                            <div className="card-body">
                                <div className="bd-highlight">
                                    <h4>Hi, Welcome</h4>
                                </div>
                                <div className="newaccount">
                                    <p className="text">Don't have an account yet? <a className="text" href="">Sign up</a></p>
                                </div>
                                <div>
                                    <Button className="buttonGoogle" style={{ marginTop: "30px", width: "100%"}}>Sign with Google</Button>
                                </div>
                                <div className="form-group" style={{ marginTop: "25px" }}>
                                    <label>Email</label>
                                    <input type="text" id="basic-addon1" className="form-control fa-envelope"></input>
                                </div>
                                <div className="form-group" style={{ marginTop: "10px" }}>
                                    <label>Password</label>
                                    <input type={"password"} className="form-control"></input>
                                </div >

                                <Button style={{ marginTop: "30px", width: "100%" }}>Sign in</Button>

                                <div style={{ marginTop: "20px" }} className="forgot align-items-center ">
                                    <p>forgot password?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div >
    )
}

export default LoginParticipant;