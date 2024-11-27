import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch({ type: "posts/fetchPostsSaga" });
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "success") {
    content = posts.map((post) => (
      <>
        <PostsExcerpt key={post.id} post={post} />
      </>
    ));
  } else if (postsStatus === "failed") {
    content = <p>"Error..."</p>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold ">Posts</h1>
      {content}
    </section>
  );
};

export default PostsList;
