let main = function(str_1, str_2){
    if(str_1.length !== str_2.length) return false;
    
    let mapped_chars = {};

    for(let i=0; i<str_1.length; i++){
        if(str_1[i] in mapped_chars){
            if(mapped_chars[str_1[i]] !== str_2[i]) return false;
        }else{
            mapped_chars[str_1[i]] = str_2[i];
        }
    }
    
    return true;
}

console.log(main(process.argv[2], process.argv[3]));