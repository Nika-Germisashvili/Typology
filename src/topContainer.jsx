import React from "react";
import { Link } from "react-router-dom";

const readOnButtonStyle = {
    width: "160px",
    height: "40px",
    color: "#c62641",
    background: "#ffffff",
    border: "1px solid #ffffff",
    marginRight: "15px"
};

const readLaterButtonStyle = {
    width: "160px",
    height: "40px",
    color: "#ffffff",
    background: "none",
    border: "1px solid #ffffff"
};

const bookmarkIconStyle = {
    marginRight: "5px",
    fontSize: "10px",
    lineHeight: "38px"
};

const TopContainer = ({children}) => {
    const topContainerStyle = {
        height: "869px",
    };

    return (
        <div className="container-fluid p-0 TopContainerStyle z-2" style={topContainerStyle}>
            {children}
            <div className="carousel_container w-100">
                <div id="carouselExampleIndicators" className="carousel slide h-80">
                    <div className="carousel-indicators">
                        <span className="indicator_span d-flex justify-content-center aling-items-center">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicator_custom" aria-current="true" aria-label="Slide 1"></button>
                        </span>
                        <span className="indicator_span d-flex justify-content-center aling-items-center">
                            <button className="indicator_custom" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </span>
                        <span className="indicator_span d-flex justify-content-center aling-items-center">
                            <button className="indicator_custom" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </span>
                        <span className="indicator_span d-flex justify-content-center aling-items-center">
                            <button className="indicator_custom" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </span>
                        <span className="indicator_span d-flex justify-content-center aling-items-center">
                            <button className="indicator_custom" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </span>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">{/* Carousel 1 */}
                            <div className="cover_letter position-absolute w-100 text-center z-0">A</div>
                            <div className="d-flex justify-content-center align-items-center test2 z-5" alt="...">
                                <div className="test3 text-center position-relative">
                                    <h2 className="h2_title_main">A beautiful blog with no images required</h2>
                                    <p className="white_under_text">
                                        By 
                                        <span className="underline-custom-white"> Madison Barnett </span> 
                                        / In
                                        <span className="underline-custom-white"> Humans </span>
                                        /
                                        <span className="underline-custom-white"> 5 Comments </span>
                                     </p>
                                     <div className="w-100 d-flex justify-content-center pt-4 mt-2">
                                        <Link to={ "/page-1" } style={readOnButtonStyle} className="btn_font btn_hover text-decoration-none">Read On</Link>

                                        <Link to={ "/blog" } className="text-decoration-none d-flex justify-content-center btn_hover" style={readLaterButtonStyle}>                                                                           
                                            <p className="m-0 btn_font">Add Blog</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">{/* Carousel 2 */}
                            <div className="cover_letter position-absolute w-100 text-center z-0">W</div>
                            <div className="d-flex justify-content-center align-items-center test2 z-5" alt="...">
                                <div className="test3 text-center position-relative">
                                    <h2 className="h2_title_main">What could possibly go wrong?</h2>
                                    <p className="white_under_text">
                                        By 
                                        <span className="underline-custom-white"> Madison Barnett </span> 
                                        / In
                                        <span className="underline-custom-white"> Humans </span>
                                        /
                                        <span className="underline-custom-white"> 3 Comments </span>
                                     </p>
                                     <div className="w-100 d-flex justify-content-center pt-4 mt-2">
                                        <Link to={ "/page-2" } style={readOnButtonStyle} className="btn_font btn_hover text-decoration-none">Read On</Link>

                                        <button className="d-flex justify-content-center btn_hover" style={readLaterButtonStyle}>
                                            <i className="fa fa-bookmark-o o_test" style={bookmarkIconStyle}></i>
                                            
                                            <p className="m-0 btn_font">Read Later</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">{/* Carousel 3 */}
                            <div className="cover_letter position-absolute w-100 text-center z-0">T</div>
                            <div className="d-flex justify-content-center align-items-center test2 z-5" alt="...">
                                <div className="test3 text-center position-relative">
                                    <h2 className="h2_title_main">The simplest ways to choose the best coffee</h2>
                                    <p className="white_under_text">
                                        By 
                                        <span className="underline-custom-white"> Madison Barnett </span> 
                                        / In
                                        <span className="underline-custom-white"> Business </span>
                                        /
                                        <span className="underline-custom-white"> 2 Comments </span>
                                     </p>
                                     <div className="w-100 d-flex justify-content-center pt-4 mt-2">
                                        <Link to={ "/page-3" }  style={readOnButtonStyle} className="btn_font btn_hover text-decoration-none">Read On</Link>

                                        <button className="d-flex justify-content-center btn_hover" style={readLaterButtonStyle}>
                                            <i className="fa fa-bookmark-o o_test" style={bookmarkIconStyle}></i>
                                            
                                            <p className="m-0 btn_font">Read Later</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">{/* Carousel 4 */}
                            <div className="cover_letter position-absolute w-100 text-center z-0">W</div>
                            <div className="d-flex justify-content-center align-items-center test2 z-5" alt="...">
                                <div className="test3 text-center position-relative">
                                    <h2 className="h2_title_main">What does your pet really think about you?</h2>
                                    <p className="white_under_text">
                                        By 
                                        <span className="underline-custom-white"> Madison Barnett </span> 
                                        / In
                                        <span className="underline-custom-white"> Culture </span>
                                        /
                                        <span className="underline-custom-white"> 2 Comments </span>
                                     </p>
                                     <div className="w-100 d-flex justify-content-center pt-4 mt-2">
                                        <Link  to={ "/page-4" } style={readOnButtonStyle} className="btn_font btn_hover text-decoration-none">Read On</Link>

                                        <button className="d-flex justify-content-center btn_hover" style={readLaterButtonStyle}>
                                            <i className="fa fa-bookmark-o o_test" style={bookmarkIconStyle}></i>
                                            
                                            <p className="m-0 btn_font">Read Later</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">{/* Carousel 5 */}
                            <div className="cover_letter position-absolute w-100 text-center z-0">C</div>
                            <div className="d-flex justify-content-center align-items-center test2" alt="...">
                                <div className="test3 text-center position-relative">
                                    <h2 className="h2_title_main">Coffee may be served in a variety of ways</h2>
                                    <p className="white_under_text">
                                        By 
                                        <span className="underline-custom-white"> Madison Barnett </span> 
                                        / In
                                        <span className="underline-custom-white"> Politics </span>
                                        /
                                        <span className="underline-custom-white"> Add Comment </span>
                                    </p>
                                    <div className="w-100 d-flex justify-content-center pt-4 mt-2">
                                        <Link to={ "/page-5" }  style={readOnButtonStyle} className="btn_font btn_hover text-decoration-none">Read On</Link>

                                        <button className="d-flex justify-content-center btn_hover" style={readLaterButtonStyle}>
                                            <i className="fa fa-bookmark-o o_test" style={bookmarkIconStyle}></i>
                                            
                                            <p className="m-0 btn_font">Read Later</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden h-100">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden h-100">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )   
};

export default TopContainer;
