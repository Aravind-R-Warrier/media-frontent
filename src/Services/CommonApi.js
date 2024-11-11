import axios from 'axios';

export const CommonApi = async (httpMethod, url, reqBody) => {
    let ReqConfig = {
        method: httpMethod,
        url,
        headers: { "Content-Type": "application/json" },
        data: reqBody // Use reqBody for the data property
    };

    try {
        const res = await axios(ReqConfig);
        return res; // Return the response
    } catch (err) {
        return err; // Handle errors (consider logging for better debugging)
    }
};
