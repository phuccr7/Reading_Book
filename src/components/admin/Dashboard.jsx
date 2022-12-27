import React, { useState, useEffect } from "react";
import "./dashboard.css";
import BarChart from "../content/BarChart";
import { UserData } from "../content/Data";
import AuthAdmin from "../../service/auth";

const dataTop = [
  {
    Name: "The Hike",
    View: "50k",
  },
  {
    Name: "The Sailor's Tale",
    View: "40k",

  },
  {
    Name: "A Runaway Tale",
    View: "30k"

  },
]

const dataSummary = [
  {
    Name: "New users",
    count: "1456",
  },
  {
    Name: "Total users",
    count: "20000",

  },
  {
    Name: "New books",
    count: "2000"

  },
  {
    Name: "Total books",
    count: "12000"
  }
]


function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [mode, setMode] = useState(1);

  useEffect(() => {
    const load = async () => AuthAdmin()

    load()
    const data = getData();
    setUserData(data);
  }, []);

  const getData = (type = "thisWeek") => {
    let labels = [];
    let data = [];
    switch (type) {
      case "thisWeek":
        labels = UserData.map((data) => data.thisWeek);
        data = UserData.map((data) => data.readerThisWeek);
        break;
      case "lastWeek":
        labels = UserData.map((data) => data.lastWeek);
        data = UserData.map((data) => data.readerLastWeek);

        break;
      case "lastMonth":
        labels = UserData.map((data) => data.lastMonth);
        data = UserData.map((data) => data.readerLastMonth);

        break;
      default:
        labels = UserData.map((data) => data.thisWeek);
        data = UserData.map((data) => data.readerThisMonth);
    }

    return {
      labels: labels,
      datasets: [
        {
          label: "Number of readers",
          data: data,
          backgroundColor: [
            "rgba(100,236,179,255)",
            "rgba(100,236,179,255)",
            "rgba(100,236,179,255)",
            "rgba(100,236,179,255)",
            "rgba(100,236,179,255)",
            "rgba(100,236,179,255)",
            "rgba(100,236,179,255)",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
  };

  function Title(props) {
    const [Title, setTitle] = useState("");
    useEffect(() => {
      setTitle(props.title);
    }, [props.title]);
    return <div className={"titleDashboard"}> {Title} </div>;
  }

  function Content(props) {
    const [listAccount, setList] = useState([]);

    useEffect(() => {
      const load = async () => await AuthAdmin()
      load()

      setList(props.data)
      // console.log(listAccount);

    }, [props.data])

    return (
      <>
        <div>
          <div className="cardInfo">
            <div className="numbers"  >
              <p className="text-sm mb-0 text-capitalize font-weight-bold text-center text-danger" style={{ marginLeft: "65px" }}>
                Top Books
              </p>
              {listAccount?.map((item, index) => {
                return (


                  <h5 className="font-weight-bolder mb-0" key={index}>
                    <span className=" text-sm font-weight-bolder .text-dark">
                      {item.Name} {item.View}
                    </span>
                    <br />

                  </h5>

                )
              })}



            </div>
          </div>
        </div>
      </>
    )
  }

  function ContentSummary(props) {
    const [listAccount, setList] = useState([]);

    useEffect(() => {
      const load = async () => await AuthAdmin()
      load()
      setList(props.data)
      console.log(listAccount);

    }, [props.data])

    return (
      <>
        <div>
          <div className="cardInfo" style={{ marginTop: "5px" }}>
            <div className="numbers"  >
              <p className="text-sm mb-0 text-capitalize font-weight-bold text-center text-danger" style={{ marginLeft: "65px" }}>
                Summary
              </p>
              {listAccount?.map((item, index) => {
                return (


                  <h5 className="font-weight-bolder mb-0" key={index}>
                    <span className=" text-sm font-weight-bolder .text-dark">
                      {item.Name} {item.count}
                    </span>
                    <br />

                  </h5>

                )
              })}



            </div>
          </div>
        </div>
      </>
    )
  }

  const changeToThisWeek = () => {
    const data = getData("thisWeek");
    setUserData(data);
    setMode(1);
  };

  const changeToLastWeek = () => {
    const data = getData("lastWeek");
    setUserData(data);
    setMode(2);
  };

  const changeToLastMonth = () => {
    const data = getData("lastMonth");
    setUserData(data);
    setMode(3);
  };

  return (
    <>
      <div className="mainTittle1">
        {/* <HeaderAdmin /> */}
        <div className="mainTitleMgb">Dashboard </div>
        <Title title={"Admin > Dashboard"} />
        <div className="mainContent2">
          <div
            style={{
              width: 700,
              borderRadius: "15px",
              paddingTop: "5px",
            }}
          >
            <div className="btnSelect">
              <button
                type="button"
                className={`btn ${mode === 1 ? "btn-secondary" : "btn-outline-secondary"
                  }`}
                disabled={mode === 1}
                style={{ marginLeft: "5px" }}
                onClick={changeToThisWeek}
              >
                This week
              </button>
              <button
                type="button"
                className={`btn ${mode === 2 ? "btn-secondary" : "btn-outline-secondary"
                  }`}
                disabled={mode === 2}
                style={{ marginLeft: "5px" }}
                onClick={changeToLastWeek}
              >
                Last week
              </button>
              <button
                type="button"
                className={`btn ${mode === 3 ? "btn-secondary" : "btn-outline-secondary"
                  }`}
                disabled={mode === 3}
                style={{ marginLeft: "5px" }}
                onClick={changeToLastMonth}
              >
                Last month
              </button>
            </div>
            {userData && <BarChart chartData={userData} />}
          </div>
        </div>
        <div className="mainContent1">
          <div style={{ marginLeft: "30px" }}>
            <Content data={dataTop} />

          </div>
        </div>

        <div className="mainContent1" style={{ marginTop: "205px" }}>
          <div style={{ marginLeft: "30px" }}>
            <ContentSummary data={dataSummary} />

          </div>


        </div>
      </div>
      <div className="contentDashboard" style={{ marginLeft: "50px" }}></div>
    </>
  );
}

export default Dashboard;
