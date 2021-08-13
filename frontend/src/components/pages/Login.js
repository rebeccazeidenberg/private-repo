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




const Login = () => {
    return(
        <div
        >
           <Form className="login-form"> 
                <FacebookLoginButton className="mt-3 mb-3" onClick={() => alert("This Will Allow Login With Facebook")}/>
                <GoogleLoginButton className="mt-3 mb-3" onClick={() => alert("This Will Allow Login with Google")}/>
                <AppleLoginButton className="mt-3 mb-3" onClick={() => alert("This Will Allow Login with Apple")}/>
            
            <div >
                <Button className="btn-lg btn-block" variant="light" style={{paddingLeft:'0px'}}  onClick={() => alert("This Will Allow Login With Registered Email And Password")}>
                    <BsEnvelope /> Log in with Email
                </Button>
            </div>
            <div className="text-center">
                {/* <a href="">Register</a> */}
                <Link to="/museums">Register</Link>
                
            </div>
            </Form>
        </div>
    )
}

export default Login;