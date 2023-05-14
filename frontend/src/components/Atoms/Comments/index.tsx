import React, { FC, useState, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Button } from "../Button/atoms";
import * as Types from "./types";
import { User, fetchUser, Role } from "../../../auth";
import { useParams,useNavigate } from "react-router-dom";


interface Comment {
  id: number;
  description: string;
  date: Date;
  userAc: User;
}

interface CommentProps extends Comment {
  onDelete?: () => void;
  isAdmin?: boolean;
}

const Comment: FC<CommentProps> = ({ id, description, date, onDelete, user,isAdmin }) => {
  const commentDeletesUrl=`http://localhost:8080/app/deleteComment`
  async function sendCommentDeleteAPI() {


    const body = {
      token: sessionStorage.getItem('userToken'),
      idComment: id
    };

      const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(body),

    };

      try{
        const response= await fetch(commentDeletesUrl,requestOptions);
        if(!response.ok){
          throw response;
          alert(response);
        } 

      }catch(err){
        console.log('dupa');
        if (err instanceof Response) {
          const message = await err.text();
          if (err.headers.get('Content-Type')?.includes('text/plain')) {
              alert(`Error: ${message}`);
          } else {
              alert('Error: Connection error. Please try again later.');
          }
      }
  }
};

return (
  <Types.UserComment>
    <p>{description}</p>
    <small>
      {user} - {new Date(date).toLocaleDateString()}
      {isAdmin && onDelete && (
        <Button onClick={() => {
          onDelete();
          sendCommentDeleteAPI();
        }}>Delete</Button>
      )}
    </small>
  </Types.UserComment>
);
};

const CommentSection: FC = () => {
  const { name } = useParams<{ name: string }>();
  const commentUrl=`http://localhost:8080/app/addComment/${name}`
  const commentsUrl=`http://localhost:8080/app/getComments/${name}`
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(commentsUrl, {
          headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
          },
        });
  
        if (!response.ok) {
          throw response;
        }
  
        const data = await response.json();
        const comments = data.map((comment: any) => ({
          id: comment.id,
          description: comment.description,
          date: comment.date,
          user: comment.user,
        }));
  
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchComments();
  }, [commentsUrl]);

  useEffect(() => {

    const getUser = async () => {
      const fetchedUser = await fetchUser();
      setUser(fetchedUser);
    };

    getUser();
  }, []);

  const handleAddComment = () => {
    const newId = comments.length + 1;
    const newUser = user?.username;
    const newDate = new Date();
    const newCommentObj = { id: newId, user: newUser, description: newComment, date: newDate };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  async function sendCommentAPI() {


      const body = {
        token: sessionStorage.getItem('userToken'),
        comment: newComment
      };
  
        const requestOptions = {
          method: 'POST',
          headers: {
              'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true'
          },
          body: JSON.stringify(body),
  
      };
  
        try{
          const response= await fetch(commentUrl,requestOptions);
          if(!response.ok){
            throw response;
            alert(response);
          } 

        }catch(err){
          console.log('dupa');
          if (err instanceof Response) {
            const message = await err.text();
            if (err.headers.get('Content-Type')?.includes('text/plain')) {
                alert(`Error: ${message}`);
            } else {
                alert('Error: Connection error. Please try again later.');
            }
        }
    }
  };

  return (
    <Types.CommentSectionContainer>
      <h2>Comment Section</h2>
      <Button onClick={() => setShowComments(!showComments)}>
        <FiMessageSquare /> {showComments ? "Hide Comments" : "Show Comments"}
      </Button>
      {showComments && (
        <>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              {...comment}
              onDelete={() => handleDeleteComment(comment.id)}
              isAdmin={user?.role.toString() === 'ADMIN'} // porównanie roli zalogowanego użytkownika z rolą admina
            />
          ))}
          <div>
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <Button onClick={()=>{handleAddComment(),sendCommentAPI()}}>Add Comment</Button>
          </div>
        </>
      )}
    </Types.CommentSectionContainer>
  );
};

export default CommentSection;