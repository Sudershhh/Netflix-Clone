import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./SignUp.css"
function SignUp() {

    const emailRef= useRef(null);
    const passwordRef= useRef(null);
    const registerHandler = (event) =>
    {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then(authUser => {console.log(authUser)})
        .catch((error) => console.log(error.message))
    }
    const signInHandler = (event) =>
    {
        event.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then(authUser => {console.log(authUser)})
        .catch((error) => alert(error.message))

    }

    return (
        <section className="sign_up">
            <form onSubmit={signInHandler} className="sign_up_form">
                <h1>Sign In</h1>
                <input placeholder="Email Adress" type="email" ref={emailRef}/>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button type="submit">Sign In</button>
                <h4><span className="new-to-netflix">New to Netflix?</span> 
                    <span className="signup_link" onClick={registerHandler}> Sign Up Now.</span>
                </h4>
            </form>
        </section>
    )
}

export default SignUp
