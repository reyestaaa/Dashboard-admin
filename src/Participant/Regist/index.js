import { Container, Row, Col, Form } from "react-bootstrap";
import './index.css'

function Register(){
    return(
    <div className="form-user">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="welcome">
              <h1>Hi, Welcome</h1>
              <p>Please Create Your Account</p>
            </div>
          </Col>

          <Col sm={6}>
            <div className="haveacc">
              <p className="text">
                Already have account?
                <a className="text" href="/login/participant">
                  Login
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="input-signup"
                type="text"
                placeholder="Enter Name"
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="input-signup"
                required="require"
                type="email"
                placeholder="Enter email"
             
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="input-signup"
                type="password"
                placeholder="Enter Passsword"
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Re-Passsword</Form.Label>
              <Form.Control
                className="input-signup"
                type="password"
                placeholder="Re-Enter Passsword"
               
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Institute</Form.Label>
              <Form.Control
                className="input-signup"
                type="text"
                placeholder="Enter Institute"
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="input-signup"
                type="number"
                placeholder="Enter Phone Number"
       
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                className="input-signup"
                type="text"
                placeholder="Enter Gender"
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Birth</Form.Label>
              <Form.Control
                className="input-signup"
                type="date"
                placeholder="Enter Date Birth"
              
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <button className="btn-forms" >
              Sign Up
            </button>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </div>
    )
}
export default Register;