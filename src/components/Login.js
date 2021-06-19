import React, { useState } from 'react'
import "./Login.css"
import logo from "../Images/netflixlogo.png"
import SignUp from './SignUp';
function Login() {

    const [isSignUp, setSignUp] = useState(false);

    const showsignUpHandler = () =>
    {
        setSignUp(prevState => !prevState)
    }

    return (
        <section className="login">
            <nav className="login_header">
                <img src={logo} className="logo login-logo" alt="Netflix Logo" loading="lazy" />
                <button className="sign-in" onClick={showsignUpHandler}>Sign In</button>               
            </nav>
            <article className= "login-body">

                {isSignUp ? <SignUp /> :  <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="get-started">
                        <input type="email" placeholder="Email Address" />
                        <button className="get-started-btn" onClick={showsignUpHandler}>Get Started</button>
                    </div>
                
                
                </>

                }
               
            </article>
            <div className="login-gradient"></div>


        </section>
    )
}

export default Login
