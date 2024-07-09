import React, { useEffect } from "react";
import { Fragment } from "react";
import TopHeader from "./topHeader";
import TopContainer from "./topContainer";
import Header from "./Header";
import Body from "./body";
import axios from "axios";


function Main() {

    useEffect(() => {
        axios.get("https://apitest.reachstar.io/blog/list").then(function(response) {
            console.log(response.data);
        });
    }, []);

    return (
        <Fragment>
            <TopHeader></TopHeader>
            <TopContainer>
                <Header></Header>
            </TopContainer>
            <Body></Body>               
        </Fragment>
    );
    
};

export default Main;