import React, { FC, useState, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Button } from "../Button/atoms";
import * as Types from "./types";
import { User, fetchUser, Role } from "../../../auth";



interface Comment {
  id: number;
  text: string;
  date: Date;
  user?: User | null;
}

interface CommentProps extends Comment {
  onDelete?: () => void;
  isAdmin?: boolean;
}

const Comment: FC<CommentProps> = ({ id, text, date, onDelete, isAdmin, user }) => {
  return (
    <Types.UserComment>
      <p>{text}</p>
      <small>
        {user ? user.username : "Anonymous"} - {date.toLocaleDateString()}
        {isAdmin && onDelete && <Button onClick={onDelete}>Delete</Button>} {/* wyświetlenie przycisku usuwania tylko dla admina */}
      </small>
    </Types.UserComment>
  );
};

const CommentSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await fetchUser();
      setUser(fetchedUser);
    };

    getUser();
  }, []);

  const handleAddComment = () => {
    const newId = comments.length + 1;
    const newUser = user || null;
    const newDate = new Date();
    const newCommentObj = { id: newId, user: newUser, text: newComment, date: newDate };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
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
              isAdmin={user?.role.toString() == "ADMIN"} // porównanie roli zalogowanego użytkownika z rolą admina
            />
          ))}
          <div>
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <Button onClick={handleAddComment}>Add Comment</Button>
          </div>
        </>
      )}
    </Types.CommentSectionContainer>
  );
};

export default CommentSection;