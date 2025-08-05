import apiClient from "@/api/apiClient.js";
import initialPosts from "@/data/initialPosts.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postsApi = apiClient("posts", 500, initialPosts);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletePosts = createAsyncThunk(
  "posts/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await postsApi.delete(id);
      return response.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createPost = createAsyncThunk(
  "post/create",
  async (item, { rejectWithValue }) => {
    try {
      const res = await postsApi.create(item);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
