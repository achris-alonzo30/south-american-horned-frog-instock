import axios from "axios";

const API_URL = "http://localhost:5174/videos";

export const getVideos = async (fn) => {
    try {
        const res = await axios.get(`${API_URL}`);

        return fn(res.data);
    } catch (error) {
        console.error(error)
    }
}

export const getVideoWithId = async (videoId, fn) => {
    try {
        const res = await axios.get(`${API_URL}/${videoId}`);

        return fn(res.data);
    } catch (error) {
        console.error(error)
    }
}

export const postComment = async (videoId, newComment) => {
    try {
        const res = await axios.post(`${API_URL}/${videoId}/comments`, newComment);

        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const deleteComment = async(videoId, commentId) => {
    try {
        const res = await axios.delete(`${API_URL}/${videoId}/comments/${commentId}`);

        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const uploadVideo = async (newVideo) => {
    try {
        const res = await axios.post(`${API_URL}`, newVideo);

        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const likeVideo = async (videoId) => {
    try {
        const res = await axios.put(`${API_URL}/${videoId}/likes`);

        return res.data;
    } catch (error) {
        console.error(error)
    }
}