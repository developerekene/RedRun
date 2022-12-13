import React from 'react';

const LoginScreen = () => {
  return (
    <div className='app__loginScreen'>
        <div className='app__loginScreen-image'>
            <img src="" alt="" />
            <h1>New Scheduling And Routing Options</h1>
            <p>We also update the format of podcasts and rewards</p>

        </div>

        <div className='app__loginScreen-header'>  
            <div>
                <h1>Hello Again!</h1>
                <p>Alphabetical correction</p>
            </div>

            <form className='app__loginScreen-form'>

                <div className='app__loginScreen-info'>

                 <input className="Login-input" placeholder="Email" type="text" />

                 <input className="" placeholder="***************" type="password" />
                </div>

                <div className='app__loginScreen-'>
                    <p>Remember Me</p>
                    <p>Recovery Password</p>
                </div>
                
                <div className='app__loginScreen-login'>
                  <button className='btn'>Login</button>
                </div>

                <div className='app__loginScreen-signin'>
                  <button className='btn'>Sign in with Google</button>
                </div>

            </form>
            <div className='app__loginScreen-footer'>
                <p>Don't have an account yet?</p>
                <p>Sign Up</p>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen
