import React from 'react'
import Style from '../../style/content.module.css'
import CartBook from '../cartBook/CartBook'



function Content(props) {
    return (
        <>
            <div style={props.style}>
                <div className={Style.content}>
                    <div className={Style.headerContent}>

                        <div style={{ flex: 1 }}>

                            <span className={Style.title} >Books</span>
                            <span className={Style.title}>Audiobooks</span>
                            <span className={Style.title}>Postcasts</span>
                        </div>
                        <div style={{ flex: 1 }}> </div>
                        <div className={Style.searchBar}>
                            <input className={Style.searchInput} type="text" placeholder="Search" />

                        </div>

                    </div>


                    <div className={Style.forYou}>

                        <div>For You</div>
                        <div className={Style.contentForYou}>

                            <CartBook />
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}




const PostsData = [
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Nomad Lifestyle",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "React and the WP-API",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Nomad Lifestyle",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "React and the WP-API",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Nomad Lifestyle",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "React and the WP-API",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    }
]

export default Content
