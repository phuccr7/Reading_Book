import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';
import "./admin.css"
import StyleHome from '../../style/content.module.css'
import chat from "../../assets/imgs/chat.png";
import update from "../../assets/imgs/update.png";
import del from "../../assets/imgs/delete.png";
import { Link, Route, Routes, useHref, useNavigate } from 'react-router-dom';


import { Dialog } from 'primereact/dialog';
import AlertDialogSlide from '../dialog/Dialog';
import { render } from 'react-dom';


import $ from "jquery"

import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';







// import { fontSize } from '@mui/system';

// import HeaderAdmin from '../../components/header/HeaderAdmin'
const data = [
    {
        "Name": "Sách hay",
        "Page": "1000",
        "Author": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Create": "Active",
        // Action:""
    },
    {
        "Name": "Trí tuệ do thái",
        "Page": "11011",
        "Author": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Create": "Banned",
        // Action:""
    },
    {
        "Name": "Nhà giả kim",
        "Page": "12270",
        "Author": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Create": "Deleted",
        // Action:""
    },
]
function ManagerBook() {
    return (
        <>
            <Routes>
                {/* <Route path='/'> */}


                <Route path='all' element={<AllBook />} />
                <Route path='add' element={<AddBook />} />

                {/* </Route> */}
            </Routes>
        </>
    )
}



function AllBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Book Management </div>
                <Title title={"Admin > Book Management"} />
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
function AddBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Add new book</div>
                <Title title={"Admin > Book Management > Add new book "} />
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
function Content(props) {
    const [listAccount, setList] = useState([]);

    useEffect(() => {

        setList(props.data)
        console.log(listAccount);

    }, [props.data])



    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../add', { replace: true }), [navigate]);
    return (
        <>
            <div>


                <div className={StyleHome.searchBarAdmin}>
                    <input className={StyleHome.searchInputAdmin} type="text" placeholder="Search" />
                    <button className='banned' onClick={handleOnClick}>Add new book</button>

                </div>
                <hr style={{ color: "red" }}></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Author</th>
                            <th>Author</th>
                            <th>Pages</th>
                            <th>Views</th>
                            <th>Category</th>
                            <th>Create at</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {listAccount} */}

                        {listAccount?.map((item, index) => {

                            return (
                                <tr key={index + 1}>
                                    <th>{index + 1}</th>
                                    <th>{item.Name}</th>
                                    <td>{item.Author}</td>
                                    <td>{item.Page}</td>
                                    <td>{item.Views}</td>
                                    <td>{item.Type}</td>
                                    <td>{item.Create}</td>

                                    <td className='optionAdmin'>
                                        {/* <img className='icon' src={chat} alt="" onClick={() => <BanAccountUser user={item.Page} />} /> */}

                                        <AlertDialogSlide icon={chat} user={item.Page} type={"chat"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Page)} /> */}
                                        <AlertDialogSlide icon={update} user={item.Page} type={"update"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Page)} /> */}
                                        <AlertDialogSlide icon={del} user={item.Page} type={"delete"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Page)} /> */}
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

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    };

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../reported', { replace: true }), [navigate]);
    return (
        <>
            <div>
                <div className='formBook'>
                    <div>
                        <label htmlFor="Name">Name:</label>
                        <input id="nameBook" placeholder='Name' name='name' />
                    </div>
                    <div>
                        <label htmlFor="Name">Author:</label>
                        <input id="nameBook" placeholder='Name' name='name' />
                    </div>
                    <div>
                        <label htmlFor="Name">Category:</label>
                        <input id="nameBook" placeholder='Name' name='name' />
                    </div>
                    <div>
                        <label htmlFor="Name">Number of pages:</label>
                        <input id="nameBook" placeholder='Name' name='name' />
                    </div>
                    <div className="descriptionFormBook">
                        <label htmlFor="Name">Description:</label>

                        <input type="text" name="descript" />
                    </div>

                    <label>Add cover image
                        <input type="file" name="img" onChange={changeHandler} />
                    </label>
                    <label>Upload content file
                        <input type="file" name="img" onChange={changeHandler} />
                    </label>


                </div>
                <div className='submitFormBook'>
                    <span id='submitBook' onClick={submitBook}>submit</span>
                </div>
            </div>
        </>
    )
}

const submitBook = () => {
    let data = $('#nameBook').val();
    alert(data)
}






















//    <th>ID</th>
//                             <th>:</th>
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
//         <th>Author</th>
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
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
// </tbody>

// </table>
export default ManagerBook








