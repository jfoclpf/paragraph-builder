module.exports = function (inputText, minNumChar=500, paragraphSpacer="\n\n") {
    
    //normalize minNumChar such that the paragraph size is more even amongst the text
    minNumChar = Math.round(inputText.length / Math.round(inputText.length/minNumChar));
    
    var i, 
        sentence = "",
        sentences = []; 
        
    //creates array of sentences
    for (i=0; i<inputText.length; i++){
        if(inputText[i] !== "." || (isCharNumber(inputText[i-1]) && isCharNumber(inputText[i+1]))){
            sentence += inputText[i];
        }
        else{
            sentences.push(sentence.trim());  
            sentence = "";
        }
    }         
    
    var paragraph = "",     //temporary string with each of the paragraphs
        finalText = "",     //text to be returned
        beginOfPara = true; //tells if paragraph just begins

    for (i=0; i<sentences.length; i++){
        paragraph = paragraph.concat(beginOfPara ? "" : " ", sentences[i], ".");
        beginOfPara = false;
        if(paragraph.length > minNumChar){
            finalText = finalText.concat(paragraph, paragraphSpacer);
            paragraph = "";            
            beginOfPara = true;
        }
    }
           
    finalText = finalText.concat(paragraph);    
    
    return finalText;
}


function isCharNumber(c){
    return c >= '0' && c <= '9';
}
