module.exports = {

  toArray: function (inputText, minNumChar = 500) {
    // normalize minNumChar such that the paragraph size is more even amongst the text
    minNumChar = Math.round(inputText.length / Math.round(inputText.length / minNumChar))

    var i
    var sentence = ''
    var sentences = []

    // creates array of sentences
    for (i = 0; i < inputText.length; i++) {
      if (inputText[i] !== '.' || (isCharNumber(inputText[i - 1]) && isCharNumber(inputText[i + 1]))) {
        sentence += inputText[i]
      } else {
        sentences.push(sentence.trim())
        sentence = ''
      }
    }

    var paragraph = ''
    // temporary string with each of the paragraphs

    var paragraphsArr = []
    // text to be returned

    var beginOfPara = true // tells if paragraph just begins

    for (i = 0; i < sentences.length; i++) {
      paragraph = paragraph.concat(beginOfPara ? '' : ' ', sentences[i], '.')
      beginOfPara = false
      if (paragraph.length > minNumChar) {
        paragraphsArr.push(paragraph)
        paragraph = ''
        beginOfPara = true
      }
    }
    paragraphsArr.push(paragraph)

    return paragraphsArr
  },

  toString: function (inputText, minNumChar = 500, paragraphSpacer = '\n\n') {
    var paragraphsArr = this.toArray(inputText, minNumChar)

    var outputText = ''
    for (var i = 0; i < paragraphsArr.length; i++) {
      outputText += paragraphsArr[i] + (i === paragraphsArr.length - 1 ? '' : paragraphSpacer)
    }

    return outputText
  }

}

function isCharNumber (c) {
  return c >= '0' && c <= '9'
}
