import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import MiniHeader from "./miniHeader";
import axios from "axios";

function Blog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [deleteBlogID, setDeleteBlogID] = useState("");
    const [retrieveBlogID, setRetrieveBlogID] = useState("");
    const [blogIdToUpdate, setBlogIdToUpdate] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const [retrievedBlog, setRetrievedBlog] = useState(null); 
    

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("https://apitest.reachstar.io/blog/list");
            setBlogs(response.data);
        } catch (error) {
            console.error("Error retrieving blogs:", error);
            window.alert("There was an error retrieving the blogs!");
        }
    };

    const AddBlog = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get("https://apitest.reachstar.io/blog/list");
            const existingBlogs = response.data;

            const duplicate = existingBlogs.find(
                blog => blog.title === title || blog.description === description
            );

            if (duplicate) {
                window.alert("A blog with the same title or description already exists.");
                return;
            }

            const newBlog = await axios.post("https://apitest.reachstar.io/blog/add", {
                title: title,
                description: description
            });

            setBlogs([...blogs, newBlog.data]);
            setTitle("");
            setDescription("");
            window.alert("Blog posted successfully");

        } catch (error) {
            console.log(error);
            window.alert("Error");
        }
    };

    const deleteBlog = async (event) => {
        event.preventDefault();

        try {
            if (!deleteBlogID) {
                window.alert("Please enter a Blog ID.");
                return;
            }

            const deleteUrl = `https://apitest.reachstar.io/blog/delete/${deleteBlogID}`;

            const deleteResponse = await axios.delete(deleteUrl);
            console.log("Blog deleted successfully:", deleteResponse.data);
            window.alert("Blog deleted successfully");

            fetchBlogs();

        } catch (error) {
            console.error("Error deleting blog:", error);
            window.alert("Error deleting blog");
        } finally {
            setDeleteBlogID("");
        }
    };

    const updateBlog = async (event) => {
        event.preventDefault();

        try {
            if (!blogIdToUpdate) {
                window.alert("Please enter a Blog ID to update.");
                return;
            }

            const updateUrl = `https://apitest.reachstar.io/blog/edit/${blogIdToUpdate}`;

            const updateResponse = await axios.put(updateUrl, {
                title: updateTitle,
                description: updateDescription
            });

            console.log("Blog updated successfully:", updateResponse.data);
            window.alert("Blog updated successfully");

            fetchBlogs();

        } catch (error) {
            console.error("Error updating blog:", error);
            window.alert("Error updating blog");
        } finally {
            setBlogIdToUpdate("");
            setUpdateTitle("");
            setUpdateDescription("");
        }
    };

    const retrieveBlogById = async () => {
        try {
            const response = await axios.get(`https://apitest.reachstar.io/blog/get/${retrieveBlogID}`);
            console.log("Blog retrieved successfully:", response.data);
            window.alert("Blog retrieved successfully");
            setRetrievedBlog(response.data);

            const { title, description } = response.data;
            const postResponse = await axios.post("https://apitest.reachstar.io/blog/add", {
                title,
                description
            });
            
            console.log("Posted retrieved blog successfully:", postResponse.data);
            console.log(retrievedBlog);
        } catch (error) {
            console.error("Error retrieving or posting blog:", error);
            alert("Failed to retrieve or post blog. Please check the Blog ID.");
        }
    };
    
    return (
        <Fragment>
            <MiniHeader />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="blog_container z-0 pt-5">
                        <div className="row justify-content-center mt-5">
                            <div className="center_section">
                                {/* Add Blog Form */}
                                <form id="myForm" onSubmit={AddBlog} method="POST">
                                    <div className="w-100 pt-3">
                                        <h2 className="blog_text_title">Add Blog</h2>
                                    </div>
                                    <div className="w-100 pt-3 pb-3">
                                        <label className="form_label pb-1">Enter Title</label>
                                        <input type="text" className="form_input w-100" value={title} onChange={(event) => setTitle(event.target.value)} />
                                    </div>
                                    <div className="w-100 pb-2">
                                        <label className="form_label pb-1">Enter Description</label>
                                        <textarea className="form_input w-100 mb-1 description_input" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                                    </div>
                                    <div className="w-100 d-flex justify-content-end">
                                        <input className="readButtonsOn m-0 bg-success" value="Add Blog" type="submit" />
                                    </div>
                                </form>
                                {/* Retrieve Blog Form */}
                                <form className="py-5" id="retrieveForm" method="GET" onSubmit={(e) => {
                                    e.preventDefault();
                                    retrieveBlogById();
                                }}>
                                    <div className="w-100 pt-3">
                                        <h2 className="blog_text_title">Retrieve Blog by ID</h2>
                                    </div>
                                    <div className="w-100 pt-3 pb-4">
                                        <label className="form_label pb-2">Blog ID</label>
                                        <input type="text" className="form_input w-100" value={retrieveBlogID} onChange={(event) => setRetrieveBlogID(event.target.value)} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end">
                                        <input className="readButtonsOn m-0 bg-primary" value="Retrieve Blog" type="submit" />
                                    </div>
                                </form>
                                {/* Update Blog Form */}
                                <form className="py-5" id="updateForm" method="PUT" onSubmit={updateBlog}>
                                    <div className="w-100 pt-3">
                                        <h2 className="blog_text_title">Update Blog</h2>
                                    </div>
                                    <div className="w-100 pt-3 pb-3">
                                        <label className="form_label pb-1">Enter Blog ID to Update</label>
                                        <input type="text" className="form_input w-100" value={blogIdToUpdate} onChange={(event) => setBlogIdToUpdate(event.target.value)} />
                                    </div>
                                    <div className="w-100 pt-3 pb-3">
                                        <label className="form_label pb-1">Enter Updated Title</label>
                                        <input type="text" className="form_input w-100" value={updateTitle} onChange={(event) => setUpdateTitle(event.target.value)} />
                                    </div>
                                    <div className="w-100 pb-2">
                                        <label className="form_label pb-1">Enter Updated Description</label>
                                        <textarea className="form_input w-100 mb-1 description_input" value={updateDescription} onChange={(event) => setUpdateDescription(event.target.value)}></textarea>
                                    </div>
                                    <div className="w-100 d-flex justify-content-end">
                                        <input className="readButtonsOn m-0 bg-warning" value="Update Blog" type="submit" />
                                    </div>
                                </form>
                                {/* Delete Blog Form */}
                                <form className="py-5" id="deleteForm" method="DELETE" onSubmit={deleteBlog}>
                                    <div className="w-100 pt-3">
                                        <h2 className="blog_text_title">Delete Blog</h2>
                                    </div>
                                    <div className="w-100 pt-3 pb-4">
                                        <label className="form_label pb-2">Blog ID</label>
                                        <input type="text" className="form_input w-100" value={deleteBlogID} onChange={(event) => setDeleteBlogID(event.target.value)} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end">
                                        <input className="readButtonsOn m-0" value="Remove Blog" type="submit" />
                                    </div>
                                </form>
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
    );
}

export default Blog;
