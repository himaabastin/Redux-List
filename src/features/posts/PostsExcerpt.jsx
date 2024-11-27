import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <div className="border-gray-400 border rounded-xl p-4 my-3">
      <h2 className="text-xl font-bold ">{post?.title}</h2>
      <p className="pt-2">{post?.body}</p>

      <p className="text-gray-500 ">
        <PostAuthor userId={post?.userId} />
      </p>
      <ReactionButtons post={post} />
    </div>
  );
};

export default PostsExcerpt;
