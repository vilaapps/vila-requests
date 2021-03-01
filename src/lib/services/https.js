import axios from "axios";

export const get = async ({
    serverUrl,
    endpoint,
    queryStringParams = {},
}) => {
    try {
        const response = await axios.get(`${serverUrl}/${endpoint}`, { params: queryStringParams });
        return successObject(response);
    } catch (error) {
        return errorObject(error);
    }
};

export const post = async ({
    serverUrl,
    endpoint = "",
    bodyParams = {},
    queryStringParams = {}
}) => {
    try {
        const response = await axios.post(`${serverUrl}/${endpoint}`, bodyParams, { params: queryStringParams });
        return successObject(response);
    } catch (error) {
        return errorObject(error);
    }
};

export const put = async ({
    serverUrl,
    endpoint = "",
    bodyParams = {}
}) => {
    try {
        const response = await axios.put(`${serverUrl}/${endpoint}`, bodyParams);
        return successObject(response);
    } catch (error) {
        return errorObject(error);
    }
};

export const destroy = async ({
    serverUrl,
    endpoint = "", 
    bodyParams = {}
}) => {
    try {
        const response = await axios.delete(`${serverUrl}/${endpoint}`, bodyParams);
        return successObject(response);
    } catch (error) {
        return errorObject(error);
    }
};

const successObject = (response) => {
    return {
        success: true,
        status: response.status,
        data: response.data,
    };
};

const errorObject = (error) => {
    return {
        success: false,
        status: error.request.status,
        errors: errorsResponse(error),
    };
};

const errorsResponse = (error) => {
    try {
        return JSON.parse(error.request.response);
    } catch {
        return { error: "undefined" };
    }
};

export const setAuthorizationToken = (token) => token
    ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    : delete axios.defaults.headers.common["Authorization"]