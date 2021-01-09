import { useState, useEffect } from 'react';

import API from './Api';

/**
 * @description
 * @param {string} endpoint 
 * @param {any} dependencies 
 * @returns {array}
 */
export const useHttpGet = (endpoint, dependencies) => {
    
    const [data, setData] = useState(dependencies);
    const [path] = useState(endpoint);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response =  await API.get(path);
                setData(response.data);
            } catch (error) {
                setIsError(true)
                console.error(error.message)
            } finally {
                setIsLoading(false);
            }
        }
    fetchData();
    }, [path]);

    return {state: data, setState: setData, isLoading, isError};
}
/**
 * @description
 * @param {string} endpoint 
 * @param {Response}
 */
export const get = async (endpoint) => {
    return API.get(endpoint)
    .then((response) => response.data)
    .catch(error => {
        console.error(error.message)
    });
} 