import React from 'react'
import info from '../../Assets/info.png'

export default function Signup() {
    return (
        <div>
            <div className='card w-25 m-auto d-block p-3'>
                <h3>Create account</h3>
                <label className='mt-2 signup-lable'><b>Your Name</b></label><br />
                <input type='text' className='w-100 signup-input' placeholder='First and last name' /><br />
                <label className='mt-2 signup-lable'><b>Email</b></label><br />
                <input type='text' className='w-100 signup-input' placeholder='' /><br />
                <label className='mt-2 signup-lable'><b>Password</b></label><br />
                <input type='text' className='w-100 signup-input' placeholder='At least 6 characters' /><br />
                <div className='d-flex align-item-center'>
                    <img src={info} className='mt-2' width={10} height={10} alt='info' />&nbsp;
                    <small className=''>Passwords must be at least 6 characters.</small>
                </div>
                <label className='mt-2 signup-lable'><b>Password again</b></label><br />
                <input type='text' className='w-100 signup-input' placeholder='' /><br />
                <button className='w-100 amazon-btn'>
                    Create your Amazon account
                </button>
                <p className='signup-condition'>By creating an account or logging in, you agree to Amazon’s <a href='/' className='text-decoration-none'>Conditions of Use</a> and <a href='/' className='text-decoration-none'>Privacy Policy</a>.</p>
                <p className='mt-5 signin-font d-flex'>Already have an account? <p className='signin-text mx-1'>Sign in</p></p>
            </div>
        </div>
    )
}
