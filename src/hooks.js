import { useState } from "react";
import axios from "axios";

const useFlip = (initialState=true) => {
    const [state, setState] = useState(initialState);
    const flip = () => {
        setState(state => !state)
    }
    return [state, flip];
}

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (pokemon) => {
        try {
            const response = await axios.get(`${baseUrl}${pokemon}`);
            console.log(response);
            setResponses(data => [...data, response.data])
        } catch {
            const response = await axios.get(`${baseUrl}`);
            console.log(response);
            setResponses(data => [...data, response.data])
        }
        
    }
    return [responses, addResponseData];
}

export { useFlip, useAxios };