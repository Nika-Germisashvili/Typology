import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import MiniHeader from "../miniHeader";
import CommentApp from "../CommentApp";
import { useParams } from "react-router-dom";
import axios from "axios"; 

function ReadOnFirstPage() {

    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(function() {
        axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function(response) {
            setData(response.data);
        }).catch(function(error) {
            console.log(error);
        });
    }, [id]);

    const firstLetter = data.title ? data.title.charAt(0) : '';

        return (
            <Fragment>
                <MiniHeader></MiniHeader>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="blog_container z-0 pt-5">
                            <div className="row justify-content-center mt-5 pt-5">
                                <div className="center_section">                                                                   
                                    <div className="text_section">{/* Page 1 */}
                                        <div className="row position-relative">
                                            <h2 className="blog_text_title">{ data.title }</h2>
                                            <h2 className="blog_text_letter">{ firstLetter }</h2>
                                        </div>
                                        <div className="row mt-2">
                                            <p className="gray_under_text">
                                                By 
                                                <span className="underline-custom"> Madison Barnett </span> 
                                                / In
                                                <span className="underline-custom"> Technology </span>
                                                / 2 Min Read
                                            </p>
                                        </div>
                                        <div className="row pt-4 mt-2">
                                            <p className="text_section_paragraph">{ data.description }</p>
                                        </div>                                        
                                        <div className="row justify-content-center my-5 py-5">
                                            <hr className="short_line"/>
                                        </div>
                                    </div>                                                                                                                                                                                                                                                    
                                    <div className="row pt-5 mt-3">
                                        <div className="d-flex justify-content-between w-100 p-0">
                                            <div>
                                                <button className="social_button_facebook">
                                                    <i className="fa-brands fa-facebook-f fa-lg"></i>
                                                </button>
                                            </div>   
                                            <div>
                                                <button className="social_button_twitter">
                                                    <i className="fa-brands fa-twitter fa-lg"></i>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="social_button_reddit">
                                                    <i className="fa-brands fa-reddit-alien fa-lg"></i>
                                                </button>                   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5 pt-5">
                                        <h3 className="h3_title_stories mt-5">ABOUT THE AUTHOR</h3>
                                    </div>
                                    <div className="row justify-content-center pt-5">
                                        <hr className="short_line"/>
                                    </div>
                                    <div className="row pt-5 mt-1">
                                        <div className="col-2">
                                            <img className="author_img" src="https://demo.mekshq.com/typology/wp-content/uploads/2017/03/madison_barnett-100x100.jpg" alt="img"/>
                                        </div>
                                        <div className="col-10">                                          
                                            <h5 className="h5_header mb-3">Madison Barnett</h5>

                                            <p className="p5_paragraph mt-1 mb-4">
                                                I get my inspiration from the fictional world. I'm a social geek. Completely<br /> 
                                                exploit 24/365 catalysts for change whereas high standards in action<br /> 
                                                items. Conveniently whiteboard multifunctional benefits without enabled<br /> 
                                                leadership.
                                            </p>

                                            <button className="view_all_button pt-1 mt-2">View all posts</button>
                                        </div>
                                    </div>
                                    <div className="row mt-5 pt-5">
                                        <h3 className="h3_title_stories mt-5">ADD COMMENT</h3>
                                    </div>
                                    <div className="row justify-content-center pt-5">
                                        <hr className="short_line"/>
                                    </div>
                                    <CommentApp></CommentApp>
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

export default ReadOnFirstPage;
