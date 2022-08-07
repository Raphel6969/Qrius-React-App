import React from 'react'
import "./logIn.css"

export default function LogIn() {
  return (
<div className="logInPage">
    <div>
        {/* <a className='return-a' href="/"><button className='return-btn' >Return</button></a> */}
        <a className='return-a' href="/"><button type="button" className="btn return-btn btn-outline-light">Return</button></a>
        <div className="box">
            <h2>Login</h2>
            <form>
                <div className="inputBox">
                    <input type="email" name="Email" id="useremail" required />
                    <label>User Email</label>
                    
                </div>
                <div className="inputBox">
                    <input type="password" name="pass" id="word" required />
                    <label >Password</label>
                    {/* <input type="checkbox" onclick="myFunction()"/> */}
                    {/* <label>Show Password</label> */}
                </div>
                <p>Don't have an account?<a href="#"> Create Now </a></p>
                <input type="submit" name="sign-in" value="Sign In"/>
            </form>
        </div>
    </div>
    </div>
  )
}



    // <div>
    //     <div className="box">
    //     <h2>Login</h2>
    //     <form>
    //         <div className="inputBox">
    //             <input type="email" name="email" required onKeyUp="this.setAttribute('value', this.value);" value=""/>
    //             <label>Username</label>
    //         </div>
    //         <div className="inputBox">
    //             <input type="password" name="password" required value="" onkeyup="this.setAttribute('value', this.value);"
    //                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    //                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
    //             <label>Password</label>
    //         </div>
    //         <p>Don't have an account?<a href="#"> Create Now </a></p>
    //         <input type="submit" name="sign-in" value="Sign In"/>
    //     </form>
    // </div>
    // </div>