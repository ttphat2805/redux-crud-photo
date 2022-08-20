import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const urlApi = "http://localhost:3005/photo";

export const getPhoto = createAsyncThunk("photo/getPhoto", async () => {
  const res = await axios.get(urlApi);
  const data = await res.data;
  return data;
});

export const getOnePhoto = createAsyncThunk(
  "photo/getOnePhoto",
  async (params, thunkApi) => {
    const res = await axios.get(`${urlApi}/${params}`);
    if (res.status === 200) {
      const data = await res.data;
      return data;
    }
  }
);

export const createPhoto = createAsyncThunk(
  "photo/createPhoto",
  async (params, thunkApi) => {
    const res = await axios.post(urlApi, params);
    console.log(res);
    if (res.status === 201) {
      const data = await res.data;
      toast.success("Create photo successfully");
      return data;
    } else {
      toast.error("Create photo failed");
    }
  }
);
export const updatePhoto = createAsyncThunk(
  "photo/createPhoto",
  async (params, thunkApi) => {
    console.log(params);
    const res = await axios.patch(`${urlApi}/${params.id}`, params);
    console.log(res);
    if (res.status === 200) {
      const data = await res.data;
      toast.success("Updated photo successfully");
      return data;
    } else {
      toast.error("Updated photo failed");
    }
  }
);
export const deletePhoto = createAsyncThunk(
  "photo/getOnePhoto",
  async (params, thunkApi) => {
    const res = await axios.delete(`${urlApi}/${params}`);
    console.log(res);
    if (res.status === 200) {
      const data = await res.data;
      toast.success("Delete photo successfully");
      return data;
    } else {
      toast.error("Delete photo failed");
    }
  }
);

const photo = createSlice({
  name: "photos",
  initialState: { photo: {}, onePhoto: {} },
  reducers: {
    // addPhoto: (state, action) => {
    //   state.push(action.payload);
    // },
    // removePhoto: (state, action) => {
    //   const removePhotoId = action.payload;
    //   return (state = state.filter((photo) => photo.id !== removePhotoId));
    // },
    // updatePhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
    //   if (photoIndex >= 0) {
    //     state[photoIndex] = newPhoto;
    //   }
    // },
  },
  extraReducers: {
    [getPhoto.fulfilled]: (state, action) => {
      state.photo = action.payload;
    },
    [getOnePhoto.fulfilled]: (state, action) => {
      state.onePhoto = action.payload;
    },
    [createPhoto.fulfilled]: (state, action) => {
      state.photo = action.payload;
    },
    [updatePhoto.fulfilled]: (state, action) => {
      state.photo = action.payload;
    },
  },
});

const { reducer: PhotoReducer, actions } = photo;
export const { addPhoto, removePhoto } = actions;
export default PhotoReducer;
