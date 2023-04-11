import React, { useState } from 'react'
import eye from '../../assets/Eye.svg'
import './changePass.css'
const ChangePassword = ({setPassedit,passedit}) => {
    const [cps, setCps] = useState(false)
    const [nps, setNps] = useState(false)
    const [cnps, setCnps] = useState(false)
    return (
        <div className='cpContainer' style={{overflow:"hidden"}}>
            <div className="inputBox">
                <div className="iTitle">Current Password</div>
                <div className="passwordInput">
                    <input type={cps ? 'text' : 'password'} placeholder='Current Password' />
                    <img src={eye} alt="" onClick={() => { setCps(!cps) }} />
                </div>
            </div>
            <div className="inputBox">
                <div className="iTitle">New Password</div>
                <div className="passwordInput">
                    <input type={nps ? 'text' : 'password'} placeholder='New Password' />
                    <img src={eye} alt="" onClick={() => { setNps(!nps) }} />
                </div>
            </div>
            <div className="inputBox">
                <div className="iTitle">Confirm Password</div>
                <div className="passwordInput">
                    <input type={cnps ? 'text' : 'password'} placeholder='Confirm Password' />
                    <img src={eye} alt="" onClick={() => { setCnps(!cnps) }} />
                </div>
            </div>
            <div className="passBtn">
            <div class="cancelBtn" onClick={()=>{setPassedit(false)}}>Cancel</div>
            <div class="saveBtn">Save</div>
            </div>

        </div>
    )
}

export default ChangePassword