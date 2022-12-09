import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./sidebar.css"


function SidebarAdmin() {
    return (
        <>
            {/* <Outlet /> */}

            <div>
                <section className="app">
                    <aside className="sidebar">
                        <header>
                            Menu ADMIN
                        </header>
                        <nav className="sidebar-nav">

                            <ul>
                                <li>
                                    {/* <a href="#"><i className="ion-bag"></i> <span>Quản lý Sách</span></a> */}
                                    <Link to="dashboard"><i className="ion-bag"></i> <span>DASH BOARD</span></Link>

                                </li>
                                <li>
                                    {/* <a href="#"><i className="ion-bag"></i> <span>Quản lý Sách</span></a> */}
                                    <Link to="book"><i className="ion-bag"></i> <span>Quản lý Sách</span></Link>
                                    <ul className="nav-flyout">
                                        <li>
                                            <a href="#"><i className="ion-ios-color-filter-outline"></i>Kho sách</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-ios-clock-outline"></i>Thêm sách</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-android-star-outline"></i>Cập nhật sách</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-heart-broken"></i>Beat</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    {/* <a href="#"><i className="ion-ios-settings"></i> <span className="">Quản lí tài khoản</span></a> */}
                                    <Link to="account"><i className="ion-ios-settings"></i> <span className="">Quản lí tài khoản</span></Link>
                                    <ul className="nav-flyout">
                                        <li>
                                            <a href="#"><i className="ion-ios-alarm-outline"></i>Thêm tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-ios-camera-outline"></i>Xóa Tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-ios-chatboxes-outline"></i>Cấm tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-ios-cog-outline"></i>Comment</a>
                                        </li>
                                    </ul>
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
