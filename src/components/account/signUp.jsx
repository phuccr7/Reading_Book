import React from "react";
import { Component } from "react";
import style from "../../style/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import headerUser from "../header/HeaderUser";

import book from "../../assets/imgs/book.png";
import "./account.css";
import { borderRadius } from "@mui/system";
import { useCallback, useState, useEffect } from "react";

import { useHref, useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const [birthday, setBirthday] = useState("");

    async function register() {
        console.log(userName, password);
        let item = {
            username: userName,
            password: password,
            email: email,
            retypePassword: confPass,
            fullname: name,
            dateOfBirth: birthday,
        };
        // let item = { email, name, userName, password, confPass, birthday };
        fetch("https://ebook4u-server.onrender.com/auth/register", {
            method: 'post',
            headers: {
                'Accept': 'application/json',

                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.success)
                    navigate("/home");
                else
                    console.log(result.message);
            })
    }

    return (
        <>
            <div class="bg_image">
                <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
                    <div className="container-fluid">
                        <img className="book" src={book} alt="" />
                        {/* <i className="fa-solid fa-bell"></i> */}
                        <a className="navbar-brand" href="/home">
                            EBooK4U
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li
                                    className="nav-item"
                                    style={{
                                        marginLeft: "20px",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                    }}
                                >
                                    Donate
                                    {/* <a className="nav-link mx-2 active" aria-current="page" href="/user">My Book</a> */}
                                </li>
                                <li
                                    className="nav-item"
                                    style={{
                                        marginLeft: "20px",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                    }}
                                >
                                    My Library
                                </li>
                                <li
                                    className="nav-item"
                                    style={{
                                        marginLeft: "20px",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                    }}
                                >
                                    Write
                                </li>
                                <li
                                    className="nav-item"
                                    style={{
                                        marginLeft: "20px",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                    }}
                                >
                                    Company
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="signUpForm">
                    <center>
                        <h1>Sign Up</h1>

                        <div className="row" style={{ margintop: "30px" }}>
                            <div className="col_half">
                                <input
                                    type="text"
                                    style={{
                                        width: "200px",
                                        borderRadius: "5%",
                                        height: "40px",
                                    }}
                                    name="name"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col_half">
                                <input
                                    type="text"
                                    name="name"
                                    style={{
                                        width: "200px",
                                        borderRadius: "5%",
                                        height: "40px",
                                    }}
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col_half">
                                <input
                                    type="text"
                                    style={{
                                        width: "200px",
                                        borderRadius: "5%",
                                        height: "40px",
                                    }}
                                    name="name"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="col_half">
                                <label for="birthday">Birthday:</label>
                                <input
                                    type="date"
                                    style={{
                                        width: "130px",
                                        borderRadius: "5%",
                                        height: "40px",
                                    }}
                                    name="name"
                                    placeholder="Day of birth"
                                    onChange={(e) => setBirthday(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col_half">
                                <input
                                    type="password"
                                    style={{
                                        width: "200px",
                                        borderRadius: "5%",
                                        height: "40px",
                                    }}
                                    name="name"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col_half">
                                <input
                                    type="password"
                                    name="name"
                                    style={{
                                        width: "200px",
                                        borderRadius: "5%",
                                        height: "40px",
                                    }}
                                    placeholder="Confirm password"
                                    onChange={(e) => setConfPass(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">


                        </div>

                        <button
                            type="button"
                            class="btn btn-success"
                            style={{ marginTop: "30px" }}
                            onClick={register}
                        >
                            SIGN
                        </button>
                        <div
                            style={{
                                marginTop: "20px",
                            }}
                        >
                            <a href="/login/signin">Have an account? Sign In?</a>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
}

export default Signup;