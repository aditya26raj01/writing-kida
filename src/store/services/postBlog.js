import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postBlog = createAsyncThunk(
    "store/postBlog",
    async (query, thunkAPI) => {
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + "/user/post-blog",
                query,
                { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    })