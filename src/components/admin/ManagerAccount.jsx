// import { fontSize } from '@mui/system';
import React from 'react'
import { useState, useEffect } from 'react';
import "./admin.css"
import StyleHome from '../../style/content.module.css'
import ban from "../../assets/imgs/banAC.png";
import reuse from "../../assets/imgs/reuse.png";
import del from "../../assets/imgs/delete.png";


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
            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}
                <div className='mainTitleMgb'>User Management </div>
                <Title title={"Admin > User Management"} />
                <div className='mainContent'>

                    <Content data={data} />
                </div>
            </div>
        </>
    )
}





function Title(props) {

    const [Title, setTitle] = useState("");
    useEffect(() => {

        setTitle(props.title);
    }, [props.title])
    return (
        <div className={"titleManagerBook"}> {Title} </div >

    )
}


function Content(props) {
    const [listAccount, setList] = useState([]);
    const banAccount = () => {
        alert("ban")
    }
    const deleteAccount = () => {
        alert("ban")
    }
    const restore = () => {
        alert("ban")
    }
    useEffect(() => {

        setList(props.data)
        console.log(listAccount);

    }, [props.data])

    return (
        <>
            <div>

                <div className={StyleHome.searchBarAdmin}>
                    <input className={StyleHome.searchInputAdmin} type="text" placeholder="Search" />

                </div>
                <hr style={{ color: "red" }}></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>
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
                                <tr key={index}>
                                    <th>{item.Email}</th>
                                    <td>{item.Username}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Type}</td>
                                    <td>{item.Status}</td>
                                    <td>
                                        <img className='icon' src={ban} alt="" onClick={banAccount} />
                                        <img className='icon' src={del} alt="" onClick={deleteAccount} />
                                        <img className='icon' src={reuse} alt="" onClick={restore} />
                                    </td>
                                </tr>)
                        })}
                        {/* <tr>
                            <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
                            <td>
                                <img className='icon' src={chat} alt="" />
                                <img className='icon' src={ban} alt="" />
                                <img className='icon' src={del} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
                            <td>
                                <img className='icon' src={chat} alt="" />
                                <img className='icon' src={ban} alt="" />
                                <img className='icon' src={del} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
                            <td>
                                <img className='icon' src={chat} alt="" />
                                <img className='icon' src={ban} alt="" />
                                <img className='icon' src={del} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
                            <td>
                                <img className='icon' src={chat} alt="" />
                                <img className='icon' src={ban} alt="" />
                                <img className='icon' src={del} alt="" />
                            </td>
                        </tr> */}
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