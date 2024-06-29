/**
 * @description Alternatively arrange the two given string in one.
 * Time complexity: O(n)
 * 
 * @param {*} str1 first input string
 * @param {*} str2 second input string
 * @returns alternative arrange string.
 * @ 'cat', 'dog' == 'cdaotg'
 */



function alternativeStringArrange(str1, str2){
    
    // firstly check that both inputs are strings or not.
    if(typeof(str1) !== 'string' || typeof(str2) !== 'string'){
        return 'Not string(s)';
    }

    const str1Length = str1.length;
    const str2Length = str2.length;

    // absolute length for operation.
    const absLength= str1Length > str2Length ? str1Length : str2Length;
    
    // output string value.
    let outputStr = '';

    // Iterate the character count until the absolute count is reached.
    for(let charLength = 0; charLength < absLength; charLength++){
        
        // if firstStringLength is lesser than the charCount, it means they are able to re-arrange.
        if( charLength <= str1Length){
            outputStr += str1[charLength];
        }

        // if secondStringLength is lesser than the charCount it means they are able to re-arrange.
        if( charLength <= str2Length){
            outputStr += str2[charLength]
        }
    }

    return outputStr
}


console.log(alternativeStringArrange('bipul', 'sagar'))