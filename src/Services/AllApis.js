import { CommonApi } from "./CommonApi";
import { serverUrl } from "./Server_Url";

// Add video API
export const UploadVideoApi = async (video) => {
    return await CommonApi("POST", `${serverUrl}/allvideos`, video);
};

// Get all videos API
export const getAllVideoApi = async () => {
    return await CommonApi("GET", `${serverUrl}/allvideos`, "");
};

// Get a single video API
export const getAVideoApi = async (id) => {
    return await CommonApi("GET", `${serverUrl}/allvideos/${id}`, "");
};

// Delete a video API
export const deleteAVideoApi = async (id) => {
    return await CommonApi("DELETE", `${serverUrl}/allvideos/${id}`, {});
};

// Add history API
export const addHistoryApi = async (video) => {
    return await CommonApi("POST", `${serverUrl}/history`, video);
};

// Get history API
export const getHistoryApi = async () => {
    return await CommonApi("GET", `${serverUrl}/history`, "");
};

// Delete history API
export const deleteHistoryApi = async (id) => {
    return await CommonApi("DELETE", `${serverUrl}/history/${id}`, {});
};

// add category api
export const addCatagoryApi= async (catagory)=>{
    return await CommonApi('POST',`${serverUrl}/catagory`,catagory)
}
// get category api
export const getCatagoryApi= async ()=>{
    return await CommonApi('GET',`${serverUrl}/catagory`,"")
}
// delete category api
export const deleteCatagoryApi= async (id)=>{
    return await CommonApi('DELETE',`${serverUrl}/catagory/${id}`,{})
}

// updateCatagoryApi
export const updateCatagoryApi= async (id,catagoryDetails)=>{
    return await CommonApi('PUT',`${serverUrl}/catagory/${id}`,catagoryDetails)
}