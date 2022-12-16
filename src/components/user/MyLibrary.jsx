import React, { useState, useEffect } from 'react'
import UserPage from '../userPage/UserPage';
import style from '../userPage/style1.module.css'
import DescribeContentUser from '../content/DescribeContentUser'
import ContentUser from '../content/ContentUser'
import "../sidebar/homeUser.css"
import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'



function MyLibrary() {
    const [book, setBook] = useState(10);
    return (
        <div className={style.content}>
                    <div className={style.mainbook}>
                    <DescribeContentUser style={{ flex: 1 }} book={book} />

                    </div>
                    <div className={style.library}>
                        <div className={style.libraryheader}>
                            <div className={style.title}>My Library</div>
                            {/* <button type="button"  className={style.viewall}>View all &gt; </button> */}

                        </div>
                        <ContentUser style={{ flex: 3 }} setBook={setBook} />
                        {/* <div className={style.favbook}>
                            <div className={style.book}></div>
                            <div className={style.book}></div>

                            <div className={style.book}></div>

                            <div className={style.book}></div>

                        </div> */}
                    </div>
                </div>
    )
}

export default MyLibrary
