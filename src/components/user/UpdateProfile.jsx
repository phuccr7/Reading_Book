import React, { useState, useEffect } from 'react'


import UserPage from '../userPage/UserPage';
import Replace from '../../assets/imgs/replace.png'
import style from '../userPage/style1.module.css'
import DescribeContentUser from '../content/DescribeContentUser'
import ContentUser from '../content/ContentUser'
import "../sidebar/homeUser.css"
import HeaderUser from '../../components/header/HeaderUser'
import AlertDialogSlide from '../dialog/DialogUser';
import $ from "jquery"
import { Outlet } from 'react-router-dom'

const user = localStorage.getItem('user');

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
        <input type="file" onChange={handlePreviewAvatar} id="contentPDF"/>

        
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
                                    
                                    <form action="" method='' style={{marginTop:"10px"}}>
                                    <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"10px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Username: 
                                    </span>
                                    <input type="text" id='un' name='un' style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"300px"}} />

                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"10px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Address: 
                                    </span>
                                    <input type="text" id='adr' name='adr' style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"300px"}} />

                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"10px"}} >
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Email: 

                                    </span>
                                    <input type="email" id='email' name='email' style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"300px"}}/>

                                    <br />
                                    
                                  </h5>
                                  
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"10px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Date of birth:
                                    </span>
                                    <input type="date" id='dob' name='dob' style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"300px"}}/>

                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" >
                                    <span className=" text-sm font-weight-bolder .text-dark" style={{paddingBottom:"10px"}}>
                                      Phone:
                                    </span>
                                    <input type="number" id='phone' name='phone' style={{borderRadius:"10px", marginLeft:"10px",textIndent:"10px",width:"300px"}}/>

                                    <br />
                                    
                                  </h5>

                                  {/* <AlertDialogSlide/> */}
                                  <div className='submitFormBook' style={{marginTop:"30px"}}>
                                    <span id='submitUser' onClick={submitUpdateUser}>SUBMIT</span>
                                  </div>
                                    </form>
                                  
                                  </div>
                    

                        </div>
                    </div>
            </div>
    )
}

const submitUpdateUser = async () => {
  let un = $('#un').val();
  let address = $('#adr').val();
  let email = $('#email').val();
  let dob = $('#dob').val();
  let phone = $('#phone').val();

  let content = $('#contentPDF').prop('files')[0];
  const formData = new FormData();

  formData.append("avatar", content);
  formData.append("fullname", un);
  formData.append("address", address);
  formData.append("email", email);
  formData.append("dateOfBirth", dob);
  formData.append("phone", phone);

  await fetch(
      'https://ebook4u-server.onrender.com/api/user/me',
      {
          method: 'POST',
          body: formData,
          headers: {

              'Authorization': `Bearer ${user}`
          },

      }
  )
      // .then((response) => console.log(response))
      .then((result) => {
          // window.location.href("http://localhost:3000/admin/book/all")
          window.location.reload(false)
          // console.log('Success:', result);
      })
      .catch((error) => {

      });

}

export default UpdateProfile
