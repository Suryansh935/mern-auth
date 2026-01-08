import React from 'react'
import {assets} from '../assets/assets.js'
const EmailVerify = () => {
  return (
    <div className="min-h-screen px-6 sm:px-0 flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-400">
    <img onClick={()=>Navigate('/')} src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>
    <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
    <h1>Email Verify OTP</h1>
    <p>Enter the 6-digit code sent to your email id.</p>
    </form>
    </div>
  )
}

export default EmailVerify
