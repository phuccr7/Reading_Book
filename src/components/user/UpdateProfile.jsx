import React, { useState, useEffect } from 'react'
import UserPage from '../userPage/UserPage';
import Replace from '../../assets/imgs/replace.png'
import style from '../userPage/style1.module.css'
import DescribeContentUser from '../content/DescribeContentUser'
import ContentUser from '../content/ContentUser'
import "../sidebar/homeUser.css"
import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'



function UpdateProfile() {
    return (
        <div>
            <div className="cardInfo">
                                <div className="mainContentUser"  >
                                  <p className="text-sm mb-0 text-capitalize font-weight-bold text-center " style={{marginLeft:"10px",fontSize:"30px",fontWeight:"bold"}}>
                                    Update Profile
                                  </p>
                                  <div className="contentUserMain">
                                    <div >
                                    <img src="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg" alt='' style={{marginTop: "5px", marginLeft:"50px",marginRight:"60px", height:"250px", width:"200px", backgroundColor:"gray",cursor:"pointer"}}/>
                                    </div>
                                    
                                    <form action="/user/update" method='post' style={{marginTop:"50px"}}>
                                    <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"30px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Name: 
                                    </span>
                                    <input type="text" style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"350px"}} />

                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"30px"}} >
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Email: 

                                    </span>
                                    <input type="email" style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"350px"}}/>

                                    <br />
                                    
                                  </h5>
                                  
                                  <h5 className="font-weight-bolder mb-0" >
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Date of birth:
                                    </span>
                                    <input type="date" style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px"}}/>

                                    <br />
                                    
                                  </h5>

                                  <input type="submit" name="" id="" value="SAVE" style={{marginTop:"60px",width:"70px",height:"40px",fontWeight:"bold",borderRadius:"15px",backgroundColor:"#A9F1D3"}}/>
                                    </form>
                                  
                                  </div>
                    

                        </div>
                    </div>
            </div>
    )
}

export default UpdateProfile
