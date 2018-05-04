module.exports = function (inputText, minNumChar=500, paragraphSpacer="\n\n") {

    var i, splitedText = inputText.split(".");    
        
    var paragraph = "";  //temporary string with each of the paragraphs
    var finalText = "";  //text to be returned

    for (i=0; i<splitedText.length; i++){
        paragraph = paragraph.concat(splitedText[i], ".");
        if(paragraph.length > minNumChar){
            finalText = finalText.concat(paragraph, paragraphSpacer);
            paragraph = "";
            
            splitedText[i+1] = splitedText[i+1].trim();
        }
    }
    
    paragraph = paragraph.substr(0, paragraph.length-1);
    
    finalText = finalText.concat(paragraph);    
    
    return finalText;    
}

