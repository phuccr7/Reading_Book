import React from 'react'

import Style from "./styleDescript.module.css"



function DescribeContent(props) {
    return (
        <>
            {/* <div style={props.style}> */}
            <div className={Style.container} style={props.style}>
                <div>
                    About the book


                    <h2>{props.id}</h2>
                </div>
            </div>
        </>
    )
}

export default DescribeContent
