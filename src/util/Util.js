import {useState, useEffect, useRef} from 'react';
/**
 * @description Parse an json object to given class
 * @param {object} cls
 * @param {string} json 
 * @returns {object}
 */
export const parseToObject = (cls, json) => {
    const parse = JSON.parse(json);
    return Object.assign({}, parse);
}

/**
 * @description Returns information about the browser windows size
 * @returns {width:number, height: number}
 */
export const useWindowsSize = () => {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return windowSize
}

/**
 * @description
 * @param {*} handler 
 * @param {*} deps 
 */
export const useComponentDidUpdate = (handler, deps) => {
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        return handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};