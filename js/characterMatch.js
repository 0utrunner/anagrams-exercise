exports.isCharacterMatch = function(string1, string2) {
    string1 = string1.toLowerCase().split(' ').join('').split('')
    string2 = string2.toLowerCase().split(' ').join('').split('')
    let counter = string1.length + string2.length
    while(counter > 0){
        if(string1[0] == string2[0]){
            string1.shift()
            string2.shift()
        } else {
            string2.push(string2.shift())
            counter--
        }
        if(string1.length == 0){
            break
        }
    }
    return string1.length == 0 ? true : false
};

