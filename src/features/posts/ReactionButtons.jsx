import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😯",
  heart: "❤️",
  rocket: "🚀",
  thumbsDown: "👎",
};
const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} <span className="mr-4">{post.reactions[name]}</span>
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
