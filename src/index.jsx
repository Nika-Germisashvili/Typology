import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./Main";
import Registration from "./Registration";
import ReadOnFirstPage from "./ReadOnPages/readOnFirstPage";
import Login from "./lognIn";
import { Page1, Page2, Page3, Page4, Page5 } from "./CarouselPages";
import ScrollToTop from "./scrollToTop";
import Blog from "./blog";

class App extends React.Component {
    render() {       
        return (
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route index path="/" element={<Main />}></Route>
                    <Route path="/log-in" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                    <Route path="/read/:id" element={<ReadOnFirstPage />}></Route>
                    <Route path="/blog" element={ <Blog></Blog> }></Route>
                    <Route path="/page-1" element={<Page1 />}></Route>
                    <Route path="/page-2" element={<Page2 />}></Route>
                    <Route path="/page-3" element={<Page3 />}></Route>
                    <Route path="/page-4" element={<Page4 />}></Route>
                    <Route path="/page-5" element={<Page5 />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)