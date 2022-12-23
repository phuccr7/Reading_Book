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

const dataComment = [
    {
        "Username": "messi1987",
        "Content": "I like this book",
        "Reply_to": "",

        // Action:""
    },
    {
        "Username": "ronaldo1985",
        "Content": "This is helpful website",
        "Reply_to": "4",
        // Action:""
    },
    {
        "Username": "neymarjr",
        "Content": "Excellent!",
        "Reply_to": "",
        // Action:""
    },
    {
        "Username": "kylianmpabbe",
        "Content": "I will share this website to my friend",
        "Reply_to": "2",
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
                <Route path='comment' element={<CommentBook />} />

                <Route path='update' element={<UpdateBook />} />

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

function CommentBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Comment Management </div>
                <Title title={"Admin > Book Management > Comment Management"} />
                <div className='mainContent'>

                    <ContentComment data={dataComment} />
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

function UpdateBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Update Book</div>
                <Title title={"Admin > Book Management > Update Book "} />
                <div className='mainContent'>

                    <ContentUpdate data={data} />
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

    const handleOnClick1 = useCallback(() => navigate('../update', { replace: true }), [navigate]);

    const handleOnClick2 = useCallback(() => navigate('../comment', { replace: true }), [navigate]);

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


                                        <img className='icon' src={chat} alt="" onClick={handleOnClick2} type={"chat"} />
                                        <img className='icon' src={update} alt="" onClick={handleOnClick1} type={"update"} />
                                        <AlertDialogSlide icon={del} user={item.Page} type={"delete"} />

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

function ContentComment(props) {
    const [listAccount, setList] = useState([]);

    useEffect(() => {

        setList(props.data)
        console.log(listAccount);

    }, [props.data])



    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../add', { replace: true }), [navigate]);

    const handleOnClick1 = useCallback(() => navigate('../update', { replace: true }), [navigate]);
    return (
        <>
            <div>



                <hr ></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Username</th>
                            <th>Content</th>
                            <th>Reply to</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {listAccount} */}

                        {listAccount?.map((item, index) => {

                            return (
                                <tr key={index + 1}>
                                    <th>{index + 1}</th>
                                    <th>{item.Username}</th>
                                    <td>{item.Content}</td>
                                    <td>{item.Reply_to}</td>


                                    <td className='optionAdmin' >
                                        {/* <img className='icon' src={chat} alt="" onClick={() => <BanAccountUser user={item.Page} />} /> */}


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

function ContentPreview() {
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
                    style={{ marginTop: 8, marginLeft: "10px", height: "140px", marginBottom: "10px" }}
                    src={avatar.preview}
                    alt=""
                    width="50%"

                />
            )}
            <div
                style={{ marginLeft: "10px" }}
            >
                <input type="file" onChange={handlePreviewAvatar} />


            </div>
        </>
    );
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
                        <br />
                        <ContentPreview />
                    </label>
                    <label>Upload content file
                        <input type="file" name="img" onChange={changeHandler} />
                    </label>


                </div>
                <div className='submitFormBook'>
                    <span id='submitBook' onClick={submitBook}>SUBMIT</span>
                </div>
            </div>
        </>
    )
}

function ContentUpdate(props) {
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
    const handleOnClick = useCallback(() => navigate('../update', { replace: true }), [navigate]);
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

                    <label>Change cover image
                        <br />
                        <ContentPreview />
                    </label>
                    <label>Update content file
                        <input type="file" name="img" onChange={changeHandler} />
                    </label>


                </div>
                <div className='submitFormBook'>
                    <span id='submitBook' onClick={submitBook}>UPDATE</span>
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








