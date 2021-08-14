import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    FacebookLoginButton,
    GoogleLoginButton,
    AppleLoginButton
  } from "react-social-login-buttons";
import {Button} from 'react-bootstrap';
import { BsEnvelope } from "react-icons/bs";
import old2 from './../../img/old2.38 1@2x.png';


const Login = () => {
    return(
        <div
        >
            <div className="text-center">
                <img src={old2} className="ml-6 mt-3 mb-5 shadow-sm img-fluid" alt="Logo" width={150} height={50}  />
            </div>
           <Form className="login-form"> 
                <FacebookLoginButton className="mt-3 mb-3" onClick={() => alert("This Will Allow Login With Facebook")}/>
                <GoogleLoginButton className="mt-3 mb-3" onClick={() => alert("This Will Allow Login with Google")}/>
                <AppleLoginButton className="mt-3 mb-3" onClick={() => alert("This Will Allow Login with Apple")}/>
            
            <div >
                <Button className="btn-lg btn-block" variant="light" style={{paddingLeft:'0px'}}  onClick={() => alert("This Will Allow Login With Registered Email And Password")}>
                    <BsEnvelope /> Log in with Email
                </Button>
            </div>
            <div className="text-center" style={{ paddingTop: "40px" }}>
                {/* <a href="">Register</a> */}
                <Link to="/museums" style={{color: "black"}} >Register</Link>
                
            </div>
            </Form>
        </div>
    )
}

export default Login;