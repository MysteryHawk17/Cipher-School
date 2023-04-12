import React, { useState } from 'react'
import './userInfo.css'
import './editintrest.css'
import pen from '../../assets/Pen.svg'
import linkedInIcon from '../../assets/LinkedIn.svg'
import githubIcon from '../../assets/Github.svg'
import facebookIcon from '../../assets/FaceBook.svg'
import twitterIcon from '../../assets/twitter.svg'
import instagramIcon from '../../assets/Instagram.svg'
import websiteIcon from '../../assets/website.svg'
import arrow from '../../assets/Down arrow.svg'
import ChangePassword from './ChangePassword'

const LinkItem = ({ title, icon, placeholder, webEdit }) => {
    return (
        <div className="link">
            <div className="uiTitle">
                {title}
            </div>
            <div className="inputSec">
                <span className='linkImg'><img src={icon} alt="" /></span>
                <input
                    type="text"
                    className='linkText'
                    placeholder={placeholder}
                    disabled={!webEdit}

                />
            {webEdit && <span className="webPenIcon"><img src={pen} alt="pencil" /></span>}
            </div>
        </div>)
}
const EditInterest = ({ setIntEdit, IntersetArray }) => {
    const handleClick = (e,f) => {
        console.log(e)
        if(!IntersetArray.includes(e)){
            f.target.classList.add('orangeButton')
            IntersetArray.push(e);
        }
    }
    const handleSave = () => {
        setIntEdit(false)
    }
    const intrestOptions = [
        'App Development',
        'Web Development',
        'Game Development',
        'Data Structures',
        'Programming',
        'Machine Learning',
        'Data Science',
        'Others'
    ]
    return (
        <div className='interestEdit'>

            <div className="opContainer">
                <div className="interestContainer">
                    {intrestOptions.map((e,index) => {
                        return (<div key={index} className={IntersetArray.includes(e)?"orangeButton":"button"} onClick={(f)=>handleClick(e,f)}>{e}</div>)
                    })}
                </div>
                <div className="passBtn">
                    <div class="cancelBtn" onClick={() => { setIntEdit(false) }}>Cancel</div>
                    <div class="saveBtn" onClick={handleSave}>Save</div>
                </div>
            </div>
        </div>
    )
}

const IntersetArray = [];
const HighestEducation = [
    { title: "Primary" },
    { title: "Secondary" },
    { title: "Higher Secondary" },
    { title: "Graduation" },
    { title: "Post Graduation" },
]
const currentProffession = [
    { title: "Schooling" },
    { title: "College Student" },
    { title: "Teaching" },
    { title: "Job" },
    { title: "Freelancing" },
]
const UserInfo = () => {
    const [aboutEdit, setAboutEdit] = useState(false);

    const handleAbout = () => {
        setAboutEdit(!aboutEdit)
    }
    const [webEdit, setWebEdit] = useState(false);
    const handleWeb = () => {
        setWebEdit(!webEdit)
    }
    const [proinfoEdit, setproInfoEdit] = useState(false);
    const handleproInfo = () => {
        setproInfoEdit(!proinfoEdit)
        if (proinfoEdit === false) {
            setShowOp1(false)
            setShowOp2(false)
        }
    }
    const [selectHe, setSelectedHe] = useState(HighestEducation[0].title)
    const [showO1, setShowOp1] = useState(false);
    const [selectCP, setSelectedCP] = useState(currentProffession[0].title)
    const [showO2, setShowOp2] = useState(false);
    const [passedit, setPassedit] = useState(false)
    const handlePassEdit = () => {
        setPassedit(!passedit);
    }
    const [intrestEdit, setIntEdit] = useState(false);
    const handleInterest = () => {
        setIntEdit(!intrestEdit)
    }
    return (
        <div className='userInfoContainer'>
            <div className="aboutMe">
                <div className="topRow">
                    <div className="leftHeader">ABOUT Me</div>
                    <div className="rightHeader" onClick={handleAbout}>
                        {aboutEdit ? "Save" : "Edit"}
                    </div>
                </div>
                <div className="bottomRow">
                    <textarea
                        className="textArea"
                        placeholder="Add something about you."
                        rows="4"
                        disabled={!aboutEdit}
                    ></textarea>
                    {aboutEdit && <span className="penIcon"><img src={pen} alt="pencil" /></span>}
                </div>
            </div>
            <div className="underLine"></div>
            <div className="onTheWeb">
                <div className="topRow">
                    <div className="leftHeader">ON THE WEB</div>
                    <div className="rightHeader" onClick={handleWeb}>
                        {webEdit ? "Save" : "Edit"}
                    </div>
                </div>
                <div className="linkBox">
                    <LinkItem title="LinkedIn" placeholder='LinkedIn' icon={linkedInIcon} webEdit={webEdit} />
                    <LinkItem title="Github" placeholder='Github' icon={githubIcon} webEdit={webEdit} />
                    <LinkItem title="Facebook" placeholder='Facebook' icon={facebookIcon} webEdit={webEdit} />
                    <LinkItem title="Twitter" placeholder='Twitter' icon={twitterIcon} webEdit={webEdit} />
                    <LinkItem title="Instagram" placeholder='Instagram' icon={instagramIcon} webEdit={webEdit} />
                    <LinkItem title="Website" placeholder='Website' icon={websiteIcon}
                        webEdit={webEdit} />
                </div>
            </div>
            <div className="underLine"></div>
            <div className="proInformation">
                <div className="topRow">
                    <div className="leftHeader">Professional Information</div>
                    <div className="rightHeader" onClick={handleproInfo}>
                        {proinfoEdit ? "Save" : "Edit"}
                    </div>
                </div>
                <div className="proBottomRow">
                    <div className="opLink">
                        <div className="uiTitle">Highest Education</div>
                        <div className="opInputLink" onClick={() => { proinfoEdit && setShowOp1(!showO1) }}>
                            <span className='selectedOption'>{selectHe}</span>
                            <img src={arrow} alt="" className={showO1 ? "close" : "open"} />
                        </div>
                        {showO1 && proinfoEdit &&
                            <div className="options">
                                {HighestEducation.map((e, index) => {
                                    return (<div key={index} onClick={() => { setSelectedHe(e.title); setShowOp1(false) }} className={selectHe === e.title ? "selectedOptions" : "option"}>{e.title}</div>)
                                })}
                            </div>
                        }
                    </div>
                    <div className="opLink">
                        <div className="uiTitle">What do you do currently?</div>
                        <div className="opInputLink" onClick={() => { proinfoEdit && setShowOp2(!showO2) }}>
                            <span className='selectedOption'>{selectCP}</span>
                            <img src={arrow} alt="" className={showO2 ? "close" : "open"} />
                        </div>
                        {showO2 && proinfoEdit &&
                            <div className="options">
                                {currentProffession.map((e, index) => {
                                    return (<div key={index} onClick={() => { setSelectedCP(e.title);; setShowOp2(false) }} className={selectCP === e.title ? "selectedOptions" : "option"}>{e.title}</div>)
                                })}
                            </div>
                        }
                    </div>

                </div>

            </div>
            <div className="underLine"></div>
            <div className="passwordAndSec">
                <div className="topRow">
                    <div className="leftHeader">Password & Security</div>
                    <div className="rightHeader" onClick={handlePassEdit}>
                        Change
                    </div>
                </div>
                <div className="uiTitle">
                    Password
                </div>
                <div className="inputLink">
                    <input type="password" className="passwordText" placeholder="password" disabled="" value="............." />
                </div>
                {passedit && <ChangePassword className='editPass' setPassedit={setPassedit} passedit={passedit} />}

            </div>
            <div className="underLine">

            </div>
            <div className="interests">
                <div className="topRow">
                    <div className="leftHeader">Interests</div>
                    <div className="rightHeader" onClick={handleInterest}>
                        {intrestEdit ? "Save" : "Edit"}
                    </div>


                </div>
                <div className="bottomRow">
                    {IntersetArray.map((e) => {
                        return (<div className="interestBtn">
                            <span>{e}</span>
                        </div>)
                    })}

                </div>
                {intrestEdit && <EditInterest setIntEdit={setIntEdit} IntersetArray={IntersetArray} />}
            </div>
        </div>

    )
}

export default UserInfo