const paraBuilder = require('./index.js')

const MARGIN = 0.25 // 25%, error margin for the size of each paragraph

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 8.4 vel felis et metus hendrerit elementum. Aenean neque velit, ornare ac quam vel, ultrices vulputate nunc. Sed tristique arcu cursus malesuada imperdiet. Donec eros ante, fringilla quis posuere eget, mollis eget mauris. Nunc eget gravida purus, ac pulvinar urna. Mauris vel urna lobortis lectus dapibus aliquet. Proin hendrerit laoreet tellus, quis rutrum 8.4 sem semper 8.4 quis. Donec rhoncus nisi eu ipsum mollis suscipit. Vivamus a risus felis. 8.4 Ut eu nunc id ipsum laoreet sodales. Duis porta sapien non efficitur luctus. Sed est metus, porttitor ac fermentum ac, lobortis sed mauris. Ut nec 0.2 blandit nulla, eget egestas elit. Proin faucibus, turpis et posuere ornare, eros neque pretium ipsum, et sollicitudin velit tortor in nunc. Curabitur a 0.2 consequat ipsum. Aenean viverra felis id commodo porttitor. Etiam semper vitae sem vitae rutrum.4 Curabitur nec mi ac justo vehicula bibendum et efficitur tortor. Aenean dapibus diam vitae neque laoreet 88.44 volutpat. Donec justo sapien, egestas at blandit ut, 8.4 efficitur vel tellus. Maecenas pellentesque velit tortor. Ut id ultricies mauris, accumsan hendrerit massa. In hac habitasse platea dictumst. Aliquam a risus id est sollicitudin tincidunt feugiat quis enim.4 Etiam eu efficitur dolor. Aliquam porta lorem nunc, eu finibus velit feugiat ut. Aliquam placerat neque eu dolor imperdiet, sed sollicitudin ipsum semper. Donec volutpat ac nibh id eleifend. Quisque at mattis metus. Fusce non ligula euismod, scelerisque augue sit amet, placerat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sollicitudin egestas elit, eget pretium dolor cursus in. Nam sit amet neque vitae arcu viverra tempor. Aliquam auctor elit odio, in molestie felis tempor id. Mauris lacinia elit tellus, in maximus ligula laoreet in. Morbi id suscipit lectus. Aliquam sagittis, sapien in maximus dapibus, elit nisl congue sapien, eget hendrerit dolor augue in ligula. Donec sit amet hendrerit sapien, eu porttitor dolor. Proin vehicula diam eget quam interdum, et molestie velit dapibus. Maecenas ornare hendrerit massa. Pellentesque et nibh pretium, molestie leo eu, tempus eros. Suspendisse suscipit eros quis turpis pharetra consectetur. Donec laoreet ipsum tristique risus maximus dapibus. Cras quis sagittis ligula. In sed mi et lacus suscipit dictum.'

console.log(text)
console.log('\n\n#################\n\n')

function test (sizeOfParagraph) {
  console.log('Test where each paragraph has ' + sizeOfParagraph + ' characters')
  var strWithParagraphs = paraBuilder.toString(text, sizeOfParagraph)

  var arr = strWithParagraphs.split('\n\n')
  for (let i = 0; i < arr.length; i++) {
    const trueSizeOfParagraph = arr[i].length
    console.log('True size of ' + (i + 1) + 'nth paragraph: ' + trueSizeOfParagraph)
    // gives a margin of 30%
    if (trueSizeOfParagraph < (1 - MARGIN) * sizeOfParagraph || trueSizeOfParagraph > (1 + MARGIN) * sizeOfParagraph) {
      console.log(strWithParagraphs, 'Failed test')
      process.exit(1)
    }
  }
}

test(1200)
test(1000)
test(800)
test(500)

console.log('Test run successfully')
process.exit(0)
