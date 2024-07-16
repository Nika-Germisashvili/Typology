import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CommentStyle.css";
import axios from "axios";

function CommentApp() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null); 
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios.get(`https://apitest.reachstar.io/blog/get/${id}`)
      .then(response => {
        const fetchedBlog = response.data;
        setBlog(fetchedBlog);
        localStorage.setItem('blog', JSON.stringify(fetchedBlog)); 
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);

  const handleAddComment = (e) => {
    e.preventDefault();
  
    if (inputValue.trim()) {
      const payload = {
        comment: inputValue
      };
  
      axios.post(`https://apitest.reachstar.io/comment/add/${id}`, payload)
        .then(response => {
          console.log("Comment added successfully:", response.data);
          axios.get(`https://apitest.reachstar.io/blog/get/${id}`)
            .then(response => {
              const updatedBlog = response.data;
              setBlog(updatedBlog);
              setInputValue('');
              localStorage.setItem('blog', JSON.stringify(updatedBlog));
              console.log("Blog details updated after adding comment");
            })
            .catch(error => {
              console.error('Error fetching updated blog details:', error);
            });
        })
        .catch(error => {
          console.error('Error adding comment:', error);
        });
    }
  };

  const handleRemoveComment = (commentIdToDelete) => {
    console.log('Removing comment with ID:', commentIdToDelete); 
    axios.delete(`https://apitest.reachstar.io/comment/delete/${commentIdToDelete}`)
      .then(response => {
        const updatedBlog = { ...blog, comments: blog.comments.filter(comment => comment.id !== commentIdToDelete) };
        setBlog(updatedBlog);
        localStorage.setItem('blog', JSON.stringify(updatedBlog)); 
        console.log("Comment deleted");
      })
      .catch(error => {
        console.error('Error deleting comment:', error); 
      });
  };

  if (!blog) {
    return <div>Loading...</div>; 
  }

  return (
    <form id="commentForm" onSubmit={handleAddComment}>
      <div className="Comment_st w-100">
        <h1 className="comment_header mb-2">Comment</h1>
        <textarea
          className="comment_input mb-4"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        
        <button type="submit" className="add_comment_btn">
          Submit Comment
        </button>
          
        <h2 className="blog_text_title comments_title mb-2">Comments</h2>

        <ul className="p-0">
          {blog.comments.map((comment) => (
            <div className="comment_box" key={comment.id}>
              <li className="d-flex justify-content-between" key={Date.now()}>
                {comment.comment}{" "}
                <button
                  className="comment_remove_btn"
                  onClick={() => handleRemoveComment(comment.id)}
                >
                  x
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default CommentApp;
