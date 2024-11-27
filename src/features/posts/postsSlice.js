import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle", // 'idle'|'loading'|'success'|'failed'
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              thumbsDown: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    fetchPostsStart(state) {
      state.status = "loading";
    },
    fetchPostsSuccess(state, action) {
      state.status = "success";
      const loadedPosts = action.payload.map((post) => ({
        ...post,
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          thumbsDown: 0,
        },
      }));
      state.posts = state.posts.concat(loadedPosts);
    },
    fetchPostsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  postAdded,
  reactionAdded,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} = postsSlice.actions;

export const getAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postsSlice.reducer;
