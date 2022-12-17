import React, { useState, useEffect } from 'react'

import UserPage from '../userPage/UserPage';
import Replace from '../../assets/imgs/replace.png'
import style from '../userPage/style1.module.css'
import DescribeContentUser from '../content/DescribeContentUser'
import ContentUser from '../content/ContentUser'
import "../sidebar/homeUser.css"
import HeaderUser from '../../components/header/HeaderUser'
import AlertDialogSlide from '../dialog/DialogUser';

import { Outlet } from 'react-router-dom'

function Content() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <>
    {avatar && (
          <img
            style={{ marginTop: 8,marginLeft:"10px", height:"290px" ,marginBottom:"10px" }}
            src={avatar.preview}
            alt=""
            width="80%"
            
          />
        )}
      <div
        style={{marginLeft:"10px"  }}
      >
        <input type="file" onChange={handlePreviewAvatar} />

        
      </div>
    </>
  );
}


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
                                      <Content/>
                                    {/* <img src="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg" alt='' style={{marginTop: "5px", marginLeft:"50px",marginRight:"60px", height:"250px", width:"200px", backgroundColor:"gray"}}/> */}
                                    </div>
                                    
                                    <form action="" method='' style={{marginTop:"50px"}}>
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

                                  <AlertDialogSlide/>
                                    </form>
                                  
                                  </div>
                    

                        </div>
                    </div>
            </div>
    )
}

export default UpdateProfile
