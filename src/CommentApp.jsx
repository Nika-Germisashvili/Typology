import React, { useState } from "react";
import "./CommentStyle.css";
import axios from "axios";

function CommentApp() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddComment = () => {
    axios.post("https://apitest.reachstar.io/comment/add/" + comments.id, {
      id: comments.length + 1,  
      text: inputValue
    }).then(function(response) {
        console.log("comment added");
    }).catch(function(error) {
        console.log(error);
    });


    if (inputValue.trim()) {
      const newComment = {
        id: comments.length + 1,  
        text: inputValue,
      };

      setComments([...comments, newComment]);
      setInputValue('');
    }
  };

  const handleRemoveComment = (commentIdToDelete) => {
    const updatedComments = comments.filter(comment => comment.id !== commentIdToDelete);
    setComments(updatedComments);

    axios.delete("https://apitest.reachstar.io/comment/delete/" + comments.id).then(function(response) {
        console.log("comment deleted");
    }).catch(function(error) {
        console.log(error);
    });
  };

  return (
    <form id="commentForm" action="submit_form.php" method="POST">
      <div className="Comment_st w-100">
        <h1 className="comment_header mb-2">Comment</h1>
        <textarea
          className="comment_input mb-4"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        
        <input 
          form="commentForm"
          type="submit"
          value="Submit Comment"
          className="add_comment_btn"
          onClick={handleAddComment}
        />
          
        <h2 className="blog_text_title comments_title mb-2">Comments</h2>

        <ul className="p-0">
          {comments.map((comment) => (
            <div className="comment_box" key={comment.id}>
              <li className="d-flex justify-content-between">
                {comment.text}{" "}
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
