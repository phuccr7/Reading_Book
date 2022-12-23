import React, { useState, useEffect } from 'react';

import { useStore } from '../store/hook'
import HeaderUser from '../header/HeaderUser';
import "./readbook.css"
import { getListChapter } from '../../service/GetChapter';
import left from "../../assets/imgs/left.png"
import star from "../../assets/imgs/star.png"
import heart from "../../assets/imgs/love.png"
import right from "../../assets/imgs/right.png"
import redirect from "../../assets/imgs/next.png"
import volume from "../../assets/imgs/volume.png"

const data =
{
    "id": "2220",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
}
const chapterData = [
    {
        "id": "212",
        "name": "Chapter 1"
    },
    {
        "id": "212",
        "name": "Chapter 2"
    },
    {
        "id": "212",
        "name": "Chapter 3"
    },
    {
        "id": "212",
        "name": "Chapter 4"
    },
]

const ReadBook = () => {

    const [state, update] = useStore()
    const [chapter, setChapter] = useState(1)
    const id = state.id


    //   if(loading) return <Loading />;

    return (
        <>
            <div>

                <HeaderUser />
                <div className='mainRead'>
                    <div className="beforeMain">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="contentRead"> <ContentRead chapter={"122"} />
                    </div>
                    <div className="afterMain">
                        <div className="titleAfterMain">Chapter List</div>
                        {chapterData.map((index, count) =>
                            <span key={count} className="chapterOfBook">{index.name}</span>
                        )} </div>
                </div>
            </div>

        </>
    )
}



function ContentRead(props) {
    const [dataChapter, setDataChapter] = useState([])
    useEffect(() => {
        let mounted = true;
        // fetch('https://ebook4u-server.onrender.com/api/book/all').then(response => console.log(response))
        getListChapter()

    }, [])
    return (
        <div className='outContent'>
            {/* {dataChapter.data.name} */}
            <div className='titleRead'>

                <div className="prevTitle">
                    <img src={left} alt="" />

                </div>
                <div className="midTittle">
                    <img src={heart} alt="" />
                    <img src={star} alt="" />
                    <img src={redirect} alt="" />
                    <img src={volume} alt="" />
                </div>
                <div className="nextTittle">
                    <img src={right} alt="" />

                </div>
            </div>
            <div className="story">
                qwd
            </div>
        </div>
    )
}

export default ReadBook