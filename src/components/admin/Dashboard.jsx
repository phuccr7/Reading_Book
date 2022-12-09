import React from 'react'
import "./dashboard.css"


function Dashboard() {
    return (
        <>
            <div>dashboard</div>
            <div className='contentDashboard'>




                <div className="cardInfo">

                    <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Số lượng người đọc</p>
                        {/* <img src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' /> */}
                        <h5 className="font-weight-bolder mb-0">
                            $53,000
                            <span className=" text-sm font-weight-bolder">+55%</span>
                        </h5>
                    </div>
                </div>

                <div className="cardInfo">

                    <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                        <h5 className="font-weight-bolder mb-0">
                            $53,000
                            <span className=" text-sm font-weight-bolder">+55%</span>
                        </h5>
                    </div>
                </div>


                <div className="cardInfo">

                    <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                        <h5 className="font-weight-bolder mb-0">
                            $53,000
                            <span className=" text-sm font-weight-bolder">+55%</span>
                        </h5>
                    </div>
                </div>


                <div className="cardInfo">

                    <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                        <h5 className="font-weight-bolder mb-0">
                            $53,000
                            <span className=" text-sm font-weight-bolder">+55%</span>
                        </h5>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Dashboard