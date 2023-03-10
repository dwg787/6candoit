import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getPost = createAsyncThunk(
  "posts/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "posts/addPost",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`${process.env.REACT_APP_localPosts}`, payload);
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "posts/deletePost",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${process.env.REACT_APP_localPosts}/${payload}`);
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __togglePost = createAsyncThunk(
  "posts/togglePost",
  //   'posts/togglepost',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${process.env.REACT_APP_localPosts}/${payload.id}`, {
        isDone: !payload.isDone,
      });
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "posts/updatePost",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_localPosts}/${payload.id}`,
        payload
      );
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [
    // {
    //   id: 1,
    //   title: '??????1',
    //   content: '??????1',
    // },
  ],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((posts) => posts.id !== action.payload);
    },

    togglePost: (state, action) => {
      let postlist = state.posts.slice();
      postlist.find((e) => e.id === action.payload).isDone = !postlist.find(
        (e) => e.id === action.payload
      ).isDone;
      state.posts = postlist;
    },
    toggleDisplay: (state, action) => {
      let postlist = state.posts.slice();
      postlist.find((e) => e.id === action.payload).displaytoggle =
        !postlist.find((e) => e.id === action.payload).displaytoggle;
      state.posts = postlist;
    },
    updatePost: (state, action) => {
      let postlist = state.posts.slice();
      // postlist.find((e) => e.id === action.payload.id) =
      //   action.payload;
      // state.posts = postlist;
    },
  },
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true; // ???????????? ????????? ???????????? ??????????????? true??? ???????????????.
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false; // ???????????? ????????? ????????????, false??? ???????????????.
      state.posts = action.payload; // Store??? ?????? posts??? ???????????? ????????? posts??? ????????????.
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false; // ????????? ???????????????, ???????????? ????????? ????????????, false??? ???????????????.
      state.error = action.payload; // catch ??? error ????????? state.error??? ????????????.
    },

    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__togglePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__togglePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__togglePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addPost, deletePost, togglePost, updatePost, toggleDisplay } =
  postsSlice.actions;
// reducer ??? configStore??? ???????????? ?????? export default ?????????.
export default postsSlice.reducer;
