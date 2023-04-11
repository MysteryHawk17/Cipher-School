import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import cimg from '../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png'
import avaImg from '../../assets/avatar.png'
import point from '../../assets/watch-point.svg'
import './navbar.css'
import { Avatar } from '@mui/material';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [popen, setpOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const handleProfileOption = () => {
        setpOpen(!open)
    };
    const handleProfileClose = () => {
        setpOpen(false)
    };

    return (
        <div className="navbar">
            <div className="leftItem">
                <img src={cimg} alt="" style={{ height: "35px", width: "35px" }} />
                <h1 className='title'>CipherSchools</h1>
                <div className="navOptions" style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                    <svg width="18" height="18" viewBox="0 0 27 27" fill="none" class="browse-icon" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26C20.4037 26 26 20.4037 26 13.5C26 6.59625 20.4037 1 13.5 1C6.59625 1 1 6.59625 1 13.5C1 20.4037 6.59625 26 13.5 26Z" stroke="black" stroke-width="2" stroke-linejoin="round"></path><path d="M7.875 19.125L10.6875 10.6875L19.125 7.875L16.3125 16.3125L7.875 19.125Z" stroke="black" stroke-width="2" stroke-linejoin="round"></path><path d="M14.0303 14.0303L14.3839 14.3839L14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75C13.6989 12.75 13.8897 12.829 14.0303 12.9697C14.171 13.1103 14.25 13.3011 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303Z" stroke="black"></path></svg>
                    <Button

                        sx={{ cursor: "pointer", color: "black", textTransform: "capitalize", fontSize: "15px" }}
                        onClick={handleClick}
                    >
                        Browse
                    </Button>

                    <svg width="10" height="8" viewBox="0 0 13 8" fill="none" class="down-arrow" xmlns="http://www.w3.org/2000/svg"><path d="M5.08847 6.59357C5.86888 7.37116 7.13117 7.37121 7.91165 6.59369L12.2331 2.28855C12.6563 1.867 12.6565 1.18191 12.2337 0.760065C11.8126 0.339954 11.1309 0.339825 10.7096 0.759775L7.91215 3.5485C7.13155 4.32666 5.86852 4.32659 5.08801 3.54835L2.2909 0.759393C1.86986 0.33958 1.18856 0.339433 0.767341 0.759062C0.344011 1.18079 0.343982 1.86624 0.767277 2.288L5.08847 6.59357Z" fill="black"></path></svg>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        sx={{ position: "absolute", left: "17rem", top: "-15px", borderRadius: "10px", fontSize: "15px" }}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem className='menuitem' onClick={handleClose}>App Development</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Web Development</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Game Development</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Data Structures</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Programming</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Machine Learing</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Data Science</MenuItem>
                        <MenuItem className='menuitem' onClick={handleClose}>Other</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className="rightItem">
                <div className="searchBox">
                    <svg width="17" viewBox="0 0 28 28" fill="none" class="nav-search-icon-open" xmlns="http://www.w3.org/2000/svg"><path d="M26 26L20.3335 20.3234M23.4737 12.7368C23.4737 15.5844 22.3425 18.3154 20.3289 20.3289C18.3154 22.3425 15.5844 23.4737 12.7368 23.4737C9.88925 23.4737 7.1583 22.3425 5.14475 20.3289C3.1312 18.3154 2 15.5844 2 12.7368C2 9.88925 3.1312 7.1583 5.14475 5.14475C7.1583 3.1312 9.88925 2 12.7368 2C15.5844 2 18.3154 3.1312 20.3289 5.14475C22.3425 7.1583 23.4737 9.88925 23.4737 12.7368ZM23.4737 12.7368L23.4737 12.7368Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <input type="search" class="search-input-field" placeholder="Search and Learn" autoComplete="off" spellCheck="false"></input>
                    <svg width="17" height="16" fill="none" viewBox="0 0 20 16" class="nav-search-icon" xmlns="http://www.w3.org/2000/svg" aria-controls="" aria-haspopup="true"><path d="M6 16.0005C4.17526 16.0014 2.58119 14.7673 2.125 13.0005H0V11.0005H2.126C2.64564 8.98794 4.62012 7.70874 6.66928 8.05706C8.71845 8.40537 10.1594 10.2651 9.98486 12.3363C9.81035 14.4075 8.07856 16 6 16.0005ZM6 10.0005C4.9074 10.0016 4.01789 10.8793 4.00223 11.9718C3.98658 13.0643 4.85057 13.9672 5.94269 13.9996C7.03481 14.032 7.95083 13.182 8 12.0905V12.4905V12.0005C8 10.8959 7.10457 10.0005 6 10.0005ZM20 13.0005H11V11.0005H20V13.0005ZM11 8.00049C9.17563 8.00096 7.58209 6.76693 7.126 5.00049H0V3.00049H7.126C7.64564 0.987939 9.62012 -0.291258 11.6693 0.0570554C13.7184 0.405368 15.1594 2.26511 14.9849 4.33633C14.8103 6.40755 13.0786 7.99996 11 8.00049ZM11 2.00049C9.9074 2.0016 9.01789 2.87934 9.00223 3.97183C8.98658 5.06433 9.85056 5.9672 10.9427 5.99961C12.0348 6.03203 12.9508 5.18199 13 4.09049V4.49049V4.00049C13 2.89592 12.1046 2.00049 11 2.00049ZM20 5.00049H16V3.00049H20V5.00049Z" fill="black"></path></svg>
                </div>
                <div className="notification">
                    <svg width="15" height="19" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-notification-icon"><path d="M19.0724 18.9615L17.4186 17.3077V10.8974C17.4186 6.96154 15.316 3.66667 11.6493 2.79487V1.92308C11.6493 0.858974 10.7904 0 9.72625 0C8.66215 0 7.80318 0.858974 7.80318 1.92308V2.79487C4.12369 3.66667 2.03395 6.94872 2.03395 10.8974V17.3077L0.380099 18.9615C-0.427593 19.7692 0.136509 21.1538 1.27753 21.1538H18.1622C19.316 21.1538 19.8801 19.7692 19.0724 18.9615ZM14.8545 18.5897H4.59805V10.8974C4.59805 7.71795 6.53395 5.12821 9.72625 5.12821C12.9186 5.12821 14.8545 7.71795 14.8545 10.8974V18.5897ZM9.72625 25C11.1365 25 12.2904 23.8462 12.2904 22.4359H7.16215C7.16215 23.1159 7.4323 23.7681 7.91316 24.249C8.39402 24.7299 9.04621 25 9.72625 25Z" fill="black"></path></svg>
                    <span className="navCount">0</span>
                </div>
                
                    <Button

                        sx={{ cursor: "pointer",fontSize:"10px" }}
                        onClick={handleProfileOption}
                    >
                        <Avatar className='avatar'><img src={avaImg} alt="" className="avaImg" /></Avatar>
                    </Button>
                    <Menu

                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        sx={{ position: "absolute", left: "81rem", top: "-15px", borderRadius: "10px", fontSize: "15px" }}
                        open={popen}
                        onClose={handleProfileClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleProfileClose}>Dashboard</MenuItem>
                        <MenuItem onClick={handleProfileClose}>My Proile</MenuItem>
                        <MenuItem onClick={handleProfileClose}>Enrolled Courses</MenuItem>
                        <MenuItem onClick={handleProfileClose}>Wishlist</MenuItem>
                        <MenuItem onClick={handleProfileClose}>Liked Videos</MenuItem>
                    </Menu>


                
                <div className="cipherPoint">
                    <img style={{ height: "18px", width: "18px", borderRadius: "100%" }} src={point} alt="" />
                    <span className='point'>0</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar