const truncate = (str, len)=>{
    if(typeof str !== "string"){
        throw new Error(`invalid type for the argument str expected string got ${typeof str}`); 
    }
    if(str.length > len){
        return str.substring(0, len).concat("..."); 
    }
    return str.substring(0, str.length); 
}
export {truncate}; 