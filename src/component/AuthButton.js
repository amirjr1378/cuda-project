import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import avatar from "../images/avatar.png";
const fakeAuth = {
    isAuth:false,
    login(cb) {
        this.isAuth = true;
        cb();
    },

    logout(cb) {
        this.isAuth = false;
        cb();
    }
}
const AuthButton = () => {
    
    return (
        <Route path='/'  render={({ history }) => (
            fakeAuth.isAuth
                ? (
                    <li className="nav-item">
                        <a onClick={event => { fakeAuth.logout(() => {history.push("/")})}} className="nav-link btn">logout</a>
                    </li>
                ) : (
                    <div>
                        <li className="nav-item">
                            <a onClick={e => {history.push("loginpage")}} className="nav-link btn">login</a>
                        </li>
                    </div>
                )
        )}
        />
    )
}
//form component
const Form = ({history}) => {
    //states
    const [uname, setUname] = useState('');
    const [psw, setPsw] = useState('');
    const[checked, setChecked] = useState(true);

    //functions
    const handleUname = event => {
        setUname(event.target.value)
    }
    const handlePsw = event => {
        setPsw(event.target.value)
    }
    const handleSumbit = e => {
        e.preventDefault();
        fakeAuth.login(() => {
            history.push("/")
        });
    }
    const handleChanged = event => {
        setChecked(!checked);
        event.target.checked = checked;

    }
    
    return (
        <div className="container-fluid bg-pinkish" style={{height:"88vh"}}>
            <div className="customform" id='id01'>
                <form className="customform-content animate" onSubmit={handleSumbit}>
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" value={uname} required onChange={handleUname}/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" value={psw} required onChange={handlePsw}/>

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked={checked} name="remember" onChange={handleChanged}/> Remember me
                        </label>
                    </div>

                </form>
            </div>
       </div>
       
    )
}

export {AuthButton, Form}
