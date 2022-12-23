import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./sidebar.css"
import home from "../../assets/imgs/home.png"
import user from "../../assets/imgs/user.png"
import book from "../../assets/imgs/openbook.png"
import admin from "../../assets/imgs/admin.png"

function SidebarAdmin() {
    return (
        <>
            {/* <Outlet /> */}

            <div>
                <section className="app">
                    <aside className="sidebar">
                        <header>
                            <img className='icon' src={admin} alt="" /> SuperAdmin
                        </header>
                        <div className='lineRow'></div>
                        <nav className="sidebar-nav">

                            <ul>
                                <li>
                                    {/* <a href="#"><i className="ion-bag"></i> Quản lý Sách</span></a> */}
                                    <Link to="dashboard"><span>  <img className='icon' src={home} alt="" /> DashBoard </span></Link>

                                </li>
                                <li>
                                    {/* <a href="#"><i className="ion-bag"></i> Quản lý Sách</a> */}
                                    <Link to="account/all"><span>  <img className='icon' src={user} alt="" /> Users </span></Link>


                                </li>
                                <li>
                                    {/* <a href="#"><i className="ion-ios-settings"></i> <span className="">Quản lí tài khoản</a> */}
                                    <Link to="book/all"><span>  <img className='icon' src={book} alt="" /> Books </span></Link>


                                </li>

                            </ul>
                        </nav>
                    </aside>
                </section>

            </div>
        </>

    )
}

export default SidebarAdmin
