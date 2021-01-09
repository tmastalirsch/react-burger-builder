
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