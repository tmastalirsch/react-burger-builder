import {useState, useEffect} from 'react';

import API from './Api';
/**
 * @description
 * @param {string} endpoint 
 * @param {array} dependencies 
 * @returns {array}
 */
export const useHttpGet = (endpoint, dependencies) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(!isLoading);
        API.get(endpoint)
            .then((response) => response.data)
            .then((data) =>  {
                setIsLoading(!isLoading);
                setFetchedData(data)
            })
            .catch(error => {
                setIsLoading(!isLoading);
                console.error(error.message)
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dependencies]);

    return [isLoading, fetchedData];
}