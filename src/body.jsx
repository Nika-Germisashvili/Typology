import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Body() {

    const [data, setData] = useState([]);
    

    useEffect(function() {
        axios.get("https://apitest.reachstar.io/blog/list").then(function(response) {
            setData(response.data);
        }).catch(function(error) {
            console.log(error);
        });
    }, []);

    
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="blog_container z-0 pt-5">
                            <div className="row mt-5 pt-3">
                                <h3 className="h3_title_stories">LATEST STORIES</h3>
                            </div>
                            <div className="row justify-content-center pt-4">
                                <hr className="short_line"/>
                            </div>
                            <div className="row justify-content-center mt-5 pt-4">
                                <div className="center_section"> {/* Outside Text Section */}
                                    {                                   
                                    data.sort((a, b) => b.id - a.id).slice(0, 8).map((item, index) => <div className="text_section" key={ item.id }>{/* Page 1 */}
                                        <div className="d-flex position-relative">
                                            <h2 className="blog_text_title">{ item.title }</h2>
                                            <h2 className="blog_text_letter">{ item.title[0]}</h2>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <p className="gray_under_text">
                                                By 
                                                <span className="underline-custom"> Madison Barnett </span> 
                                                / In
                                                <span className="underline-custom"> Technology </span>
                                                / 2 Min Read
                                            </p>
                                        </div>
                                        <div className="d-flex pt-4 mt-2">
                                            <p className="text_section_paragraph">{ item.description }</p>
                                        </div>
                                        <div className="d-flex mt-4 pt-1">
                                            <div className="d-flex p-0">
                                                <Link to={ "/read/" + item.id } className="readButtonsOn d-flex justify-content-center align-items-center text-decoration-none">Read On</Link>

                                                <button className="readButtonsLater d-flex justify-content-center align-items-center">
                                                    <i className="fa fa-bookmark-o bookmark_icon"></i>
                                                    <p className="m-0">Read Later</p>
                                                 </button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center my-5 py-5">
                                            <hr className="short_line"/>
                                        </div>
                                    </div>)                                     
                                    }
                                    <div className="w-100 d-flex justify-content-center pt-5 mt-4">
                                        <button className="Load_More_Button">LOAD MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="container-fluid pt-5 mb-5 pb-5">
                    <div className="row justify-content-center pt-5">
                        <div className="low_div p-0">
                            <div className="w-100">
                                <img className="typ_img" src="https://demo.mekshq.com/typology/typology_logo_invert.png" alt="Typology"/>
                            </div>
                            <div className="row">
                                <p className="gray_under_text">
                                    Created by 
                                    <span className="anti_underline-custom"> Meks </span> 
                                    · Powered by 
                                    <span className="anti_underline-custom"> WordPress </span>
                                    <br/>
                                    All rights reserved
                                </p>
                            </div>         
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
};

export default Body;