import React, { useState, useEffect } from 'react';

import { useStore } from '../store/hook'
import HeaderUser from '../header/HeaderUser';
import "./readbook.css"
import { getListChapter } from '../../service/GetChapter';
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
                            <span key={count}>{index.name}</span>
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
        // .then(items => {
        //     console.log(items);
        //     if (mounted) {
        //         // setDataChapter(items)
        //     }
        // })
        // return () => mounted = false;
    }, [])
    return (
        <div>
            {/* {dataChapter.data.name} */}
        </div>
    )
}

export default ReadBook