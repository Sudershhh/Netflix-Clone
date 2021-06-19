import React from 'react'
import NavBar from './NavBar'
import avatar from "../Images/avatar.png"
import "./ProfileScreen.css"
import { useSelector} from "react-redux"
import { auth } from '../firebase'


function ProfileScreen() {

    const user = useSelector(state => state.user.user)

    return (
        <main className="profile-screen">
            <NavBar />
            <section className="profile-body">
                <h1>Edit Profile</h1>
                <hr></hr>
                <div className="profile-info">
                    
                    <img src={avatar} alt="Avatar" className="profile-img" />
                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3>Plans</h3>
                            <hr></hr>
                            <h4>Renewal Date: 31/12/2021</h4>
                            
                            <div className="plan-details">
                                <div className="plan-info">
                                    <h3> Netflix Standard</h3>
                                    <p> 1080p</p>
                                </div>
                                <button className="subscribe-btn">Subscribe</button>
                            </div>
                            <div className="plan-details">
                                <div className="plan-info">
                                    <h3> Netflix Basic</h3>
                                    <p> 480p</p>
                                </div>
                                <button className="subscribe-btn">Subscribe</button>
                            </div>
                            <div className="plan-details">
                                <div className="plan-info">
                                    <h3> Netflix Premium</h3>
                                    <p> 4K + HDR</p>
                                </div>
                                <button className="current-package">Current Package</button>
                            </div>
      
                            
                            <button className="profile-signout" onClick={() => {auth.signOut()}}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ProfileScreen
