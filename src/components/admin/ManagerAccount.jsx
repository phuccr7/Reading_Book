// import { fontSize } from '@mui/system';
import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';
import "./admin.css"
import StyleHome from '../../style/content.module.css'
import ban from "../../assets/imgs/banAC.png";
import reuse from "../../assets/imgs/reuse.png";
import del from "../../assets/imgs/delete.png";
import { Link, Route, Routes, useHref, useNavigate } from 'react-router-dom';


import { Dialog } from 'primereact/dialog';
import AlertDialogSlide from '../dialog/Dialog';
import { render } from 'react-dom';

import UserService from '../../service/UserService';


import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import authHeader from '../../service/authHeader';
// import HeaderAdmin from '../../components/header/HeaderAdmin'
const data = [
    {
        "Email": "tqthai1852@gmail.com",
        "Username": "Jack",
        "Name": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Status": "Active",
        // Action:""
    },
    {
        "Email": "tqthai1852@gmail.com",
        "Username": "Jadck",
        "Name": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Status": "Banned",
        // Action:""
    },
    {
        "Email": "tqthai1852@gmail.com",
        "Username": "Jasck",
        "Name": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Status": "Deleted",
        // Action:""
    },
]
function ManagerAccount() {
    return (
        <>
            <Routes>
                {/* <Route path='/'> */}


                <Route path='all' element={<AllAccount />} />
                <Route path='reported' element={<BanAccount />} />

                {/* </Route> */}
            </Routes>
        </>
    )
}



function AllAccount() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>User Management </div>
                <Title title={"Admin > User Management"} />
                <div className='mainContent'>

                    <Content data={data} />
                </div>
            </div>

        </div >
    )
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function BanAccount() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Reported Account</div>
                <Title title={"Admin > User Management > Reported Account "} />
                <div className='mainContent'>

                    <ContentBan data={data} />
                </div>
            </div>

        </div >
    )
}





function Title(props) {

    const [Title, setTitle] = useState("");
    useEffect(() => {

        setTitle(props.title);
    }, [props.title])
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../all', { replace: true }), [navigate]);
    return (
        <div className={"titleManagerBook"} onClick={handleOnClick}> {Title} </div >

    )
}



function BanAccountUser(props) {
    // alert(user)
    // <Dialog />
    // <AlertDialogSlide />
    // alert("ASd")
    const [open, setOpen] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>

        </>
    )
}
const deleteAccount = (user) => {
    alert(user)
}
const restore = (user) => {
    alert(user)
}
const API = 'http://ebook4u-server.onrender.com/api'

function Content(props) {
    const [listAccount, setList] = useState(null);

    useEffect(() => {


        // console.log("asd");
        // const get = async () =>


        // axios.get(API + '/user/all', { headers: authHeader() }).
        // const fetchData = async () => {
        //     try {
        //         const { data } = await UserService.getAllAccount();
        //         console.log(data);
        //         // then(response => {
        //         //     console.log(response);
        //         //     setList(response.data)

        //         // }).catch(err => {
        //         //     console.log(err);
        //         // })
        //     }
        //     catch (e) {

        //     }
        // }
        const fetchData = async () => {
            try {
                const { data } = await axios(API + '/user/all', {
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzgyMTZjZmJjMmI3YTNhZjE2YWVkNzkiLCJpYXQiOjE2NzE3NzE1MDMsImV4cCI6MTY3MTg1NzkwM30.tlEjAYVSsKLnYwQY_99QbISoL4DpgfvUB7t40-XL8Fs'
                    }
                });
                // setList(data.data);
                console.log(data);
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchData()


        // console.log(get);



        // const data = UserService.getAllAccount();
        // .then(res => {
        //     console.log(res);
        // })
        // setList(props.data)
        // console.log(data);

    }, [])



    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../reported', { replace: true }), [navigate]);
    return (
        <>
            <div>


                <div className={StyleHome.searchBarAdmin}>
                    <input className={StyleHome.searchInputAdmin} type="text" placeholder="Search" />
                    <button className='banned' onClick={handleOnClick}>View reported account</button>

                </div>
                <hr style={{ color: "red" }}></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {listAccount} */}

                        {listAccount?.map((item, index) => {

                            return (
                                <tr key={index + 1}>
                                    <th>{index + 1}</th>
                                    <th>{item.Email}</th>
                                    <td>{item.Username}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Type}</td>
                                    <td>{item.Status}</td>

                                    <td className='optionAdmin'>
                                        {/* <img className='icon' src={ban} alt="" onClick={() => <BanAccountUser user={item.Username} />} /> */}

                                        <AlertDialogSlide icon={ban} user={item.Username} type={"ban"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Username)} /> */}
                                        <AlertDialogSlide icon={del} user={item.Username} type={"delete"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Username)} /> */}
                                        <AlertDialogSlide icon={reuse} user={item.Username} type={"reuse"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Username)} /> */}
                                    </td>

                                </tr>
                            )


                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}
function ContentBan(props) {
    const [listAccount, setList] = useState([]);

    useEffect(() => {

        setList(props.data)
        console.log(listAccount);

    }, [props.data])



    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../reported', { replace: true }), [navigate]);
    return (
        <>
            <div>

                <div className={StyleHome.searchBarAdmin}>


                </div>
                <hr style={{ color: "red" }}></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Reported by</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {listAccount} */}

                        {listAccount?.map((item, index) => {

                            return (
                                <tr key={index + 1}>
                                    <th>{index + 1}</th>
                                    <th>{item.Email}</th>
                                    <td>{item.Username}</td>
                                    <td>{item.Name}</td>

                                    <td className='optionAdmin'>
                                        <AlertDialogSlide icon={ban} user={item.Username} type={"ban"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Username)} /> */}
                                        <AlertDialogSlide icon={del} user={item.Username} type={"delete"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Username)} /> */}
                                        <AlertDialogSlide icon={reuse} user={item.Username} type={"reuse"} />
                                    </td>
                                </tr>
                            )


                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}


export default ManagerAccount





















//    <th>ID</th>
//                             <th>Name</th>
//                             <th>Author</th>
//                             <th>Pages</th>
//                             <th>Views</th>
//                             <th>Category</th>
//                             <th>Create at</th>
//                             <th>Action</th>




// <table class="paleBlueRows">
// <thead>
//     <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Author</th>
//         <th>Pages</th>
//         <th>Views</th>
//         <th>Category</th>
//         <th>Create at</th>
//         <th>Action</th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={ban} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={ban} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={ban} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={ban} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
// </tbody>

// </table>