module.exports = function (inputText, paragraphSpacer="\n\n", minNumChar=250) {

    var splitedText = inputText.split(".");

    var paragraph = "";  //temporary string with each of the paragraphs
    var finalText = "";  //text to be returned

    for (var i=0; i<splitedText.length; i++){
        paragraph = paragraph.concat(splitedText[i], ".");
        if(paragraph.length > minNumChar){
            finalText = finalText.concat(paragraph, paragraphSpacer);
            paragraph = "";
        }   
    }
    return finalText;    
}

