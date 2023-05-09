import { FC, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Button } from "../Button/atoms";
import * as Types from "./types";
type Comment = {
  id: number;
  user: string;
  text: string;
  date: Date;
};

interface CommentProps extends Comment {
  onDelete?: () => void;
  isAdmin?: boolean;
}

const Comment: FC<CommentProps> = ({ id, user, text, date, onDelete }) => {
  return (
    <Types.UserComment>
      <p>{text}</p>
      <small>
        {user} - {date.toLocaleDateString()}
        {onDelete && <Button onClick={onDelete}>Delete</Button>}
      </small>
    </Types.UserComment>
  );
};

const CommentSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    const newId = comments.length + 1;
    const newUser = "User";
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
            <Comment key={comment.id} {...comment} onDelete={() => handleDeleteComment(comment.id)} />
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