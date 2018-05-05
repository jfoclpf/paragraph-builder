This paragraph builder node script generates paragraphs from continuous text.

It outputs a text wherein the size of each paragraph is approximately the same, providing an even distribution of paragraphs within the text. It doesn't split the text on numbers such as "1.2".

# Install

`npm i paragraph-builder`

# How to use

```node
const parBuild = require("paragraph-builder");
var resultText = parBuild.toString(text);
```

# Example

If you have a consecutive string with a lot of sentences separated by dots, but with no paragraphs, like this: 

``
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel felis et metus hendrerit elementum. Aenean neque velit, ornare ac quam vel, ultrices vulputate nunc. Sed tristique arcu cursus malesuada imperdiet. Donec eros ante, fringilla quis posuere eget, mollis eget mauris. Nunc eget gravida purus, ac pulvinar urna. Mauris vel urna lobortis lectus dapibus aliquet. Proin hendrerit laoreet tellus, quis rutrum sem semper quis. Donec rhoncus nisi eu ipsum mollis suscipit. Vivamus a risus felis. Ut eu nunc id ipsum laoreet sodales. Duis porta sapien non efficitur luctus. Sed est metus, porttitor ac fermentum ac, lobortis sed mauris. Ut nec blandit nulla, eget egestas elit. Proin faucibus, turpis et posuere ornare, eros neque pretium ipsum, et sollicitudin velit tortor in nunc. Curabitur a consequat ipsum. Aenean viverra felis id commodo porttitor. Etiam semper vitae sem vitae rutrum. Curabitur nec mi ac justo vehicula bibendum et efficitur tortor. Aenean dapibus diam vitae neque laoreet volutpat. Donec justo sapien, egestas at blandit ut, efficitur vel tellus. Maecenas pellentesque velit tortor. Ut id ultricies mauris, accumsan hendrerit massa. In hac habitasse platea dictumst. Aliquam a risus id est sollicitudin tincidunt feugiat quis enim. Etiam eu efficitur dolor. Aliquam porta lorem nunc, eu finibus velit feugiat ut. Aliquam placerat neque eu dolor imperdiet, sed sollicitudin ipsum semper. Donec volutpat ac nibh id eleifend. Quisque at mattis metus. Fusce non ligula euismod, scelerisque augue sit amet, placerat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sollicitudin egestas elit, eget pretium dolor cursus in. Nam sit amet neque vitae arcu viverra tempor. Aliquam auctor elit odio, in molestie felis tempor id. Mauris lacinia elit tellus, in maximus ligula laoreet in. Morbi id suscipit lectus. Aliquam sagittis, sapien in maximus dapibus, elit nisl congue sapien, eget hendrerit dolor augue in ligula. Donec sit amet hendrerit sapien, eu porttitor dolor. Proin vehicula diam eget quam interdum, et molestie velit dapibus. Maecenas ornare hendrerit massa. Pellentesque et nibh pretium, molestie leo eu, tempus eros. Suspendisse suscipit eros quis turpis pharetra consectetur. Donec laoreet ipsum tristique risus maximus dapibus. Cras quis sagittis ligula. In sed mi et lacus suscipit dictum.";
``

Applying

```node
const parBuild = require("paragraph-builder");
var resultText = parBuild.toString(text);
```

will return this text on `resultText`:

``
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 8.4 vel felis et metus hendrerit elementum. Aenean neque velit, ornare ac quam vel, ultrices vulputate nunc. Sed tristique arcu cursus malesuada imperdiet. Donec eros ante, fringilla quis posuere eget, mollis eget mauris. Nunc eget gravida purus, ac pulvinar urna. Mauris vel urna lobortis lectus dapibus aliquet. Proin hendrerit laoreet tellus, quis rutrum 8.4 sem semper 8.4 quis. Donec rhoncus nisi eu ipsum mollis suscipit.
``

``
Vivamus a risus felis. 8.4 Ut eu nunc id ipsum laoreet sodales. Duis porta sapien non efficitur luctus. Sed est metus, porttitor ac fermentum ac, lobortis sed mauris. Ut nec 0.2 blandit nulla, eget egestas elit. Proin faucibus, turpis et posuere ornare, eros neque pretium ipsum, et sollicitudin velit tortor in nunc. Curabitur a 0.2 consequat ipsum. Aenean viverra felis id commodo porttitor. Etiam semper vitae sem vitae rutrum. 4 Curabitur nec mi ac justo vehicula bibendum et efficitur tortor.
``

``
Aenean dapibus diam vitae neque laoreet 88.44 volutpat. Donec justo sapien, egestas at blandit ut, 8.4 efficitur vel tellus. Maecenas pellentesque velit tortor. Ut id ultricies mauris, accumsan hendrerit massa. In hac habitasse platea dictumst. Aliquam a risus id est sollicitudin tincidunt feugiat quis enim. 4 Etiam eu efficitur dolor. Aliquam porta lorem nunc, eu finibus velit feugiat ut. Aliquam placerat neque eu dolor imperdiet, sed sollicitudin ipsum semper. Donec volutpat ac nibh id eleifend.
``

``
Quisque at mattis metus. Fusce non ligula euismod, scelerisque augue sit amet, placerat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sollicitudin egestas elit, eget pretium dolor cursus in. Nam sit amet neque vitae arcu viverra tempor. Aliquam auctor elit odio, in molestie felis tempor id. Mauris lacinia elit tellus, in maximus ligula laoreet in. Morbi id suscipit lectus. Aliquam sagittis, sapien in maximus dapibus, elit nisl congue sapien, eget hendrerit dolor augue in ligula.
``

``
Donec sit amet hendrerit sapien, eu porttitor dolor. Proin vehicula diam eget quam interdum, et molestie velit dapibus. Maecenas ornare hendrerit massa. Pellentesque et nibh pretium, molestie leo eu, tempus eros. Suspendisse suscipit eros quis turpis pharetra consectetur. Donec laoreet ipsum tristique risus maximus dapibus. Cras quis sagittis ligula. In sed mi et lacus suscipit dictum."
``

You can define the minimum number of characters for a paragraph, defualt is 500. Thus if you use 800, that is:

```node
var resultText = parBuild.toString(text, 800);
```

will return this text on `resultText`:

``
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 8.4 vel felis et metus hendrerit elementum. Aenean neque velit, ornare ac quam vel, ultrices vulputate nunc. Sed tristique arcu cursus malesuada imperdiet. Donec eros ante, fringilla quis posuere eget, mollis eget mauris. Nunc eget gravida purus, ac pulvinar urna. Mauris vel urna lobortis lectus dapibus aliquet. Proin hendrerit laoreet tellus, quis rutrum 8.4 sem semper 8.4 quis. Donec rhoncus nisi eu ipsum mollis suscipit. Vivamus a risus felis. 8.4 Ut eu nunc id ipsum laoreet sodales. Duis porta sapien non efficitur luctus. Sed est metus, porttitor ac fermentum ac, lobortis sed mauris. Ut nec 0.2 blandit nulla, eget egestas elit. Proin faucibus, turpis et posuere ornare, eros neque pretium ipsum, et sollicitudin velit tortor in nunc.
``

``
Curabitur a 0.2 consequat ipsum. Aenean viverra felis id commodo porttitor. Etiam semper vitae sem vitae rutrum. 4 Curabitur nec mi ac justo vehicula bibendum et efficitur tortor. Aenean dapibus diam vitae neque laoreet 88.44 volutpat. Donec justo sapien, egestas at blandit ut, 8.4 efficitur vel tellus. Maecenas pellentesque velit tortor. Ut id ultricies mauris, accumsan hendrerit massa. In hac habitasse platea dictumst. Aliquam a risus id est sollicitudin tincidunt feugiat quis enim. 4 Etiam eu efficitur dolor. Aliquam porta lorem nunc, eu finibus velit feugiat ut. Aliquam placerat neque eu dolor imperdiet, sed sollicitudin ipsum semper. Donec volutpat ac nibh id eleifend. Quisque at mattis metus. Fusce non ligula euismod, scelerisque augue sit amet, placerat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
``

``
Etiam sollicitudin egestas elit, eget pretium dolor cursus in. Nam sit amet neque vitae arcu viverra tempor. Aliquam auctor elit odio, in molestie felis tempor id. Mauris lacinia elit tellus, in maximus ligula laoreet in. Morbi id suscipit lectus. Aliquam sagittis, sapien in maximus dapibus, elit nisl congue sapien, eget hendrerit dolor augue in ligula. Donec sit amet hendrerit sapien, eu porttitor dolor. Proin vehicula diam eget quam interdum, et molestie velit dapibus. Maecenas ornare hendrerit massa. Pellentesque et nibh pretium, molestie leo eu, tempus eros. Suspendisse suscipit eros quis turpis pharetra consectetur. Donec laoreet ipsum tristique risus maximus dapibus. Cras quis sagittis ligula. In sed mi et lacus suscipit dictum.
``

# Methods

## toString

`toString(inputText [, minNumChar=500, paragraphSpacer="\n\n"])`

It returns a String with several separated paragraphs.

`inputText` is the text to be processed

`minNumChar` is the minimum number of characters for a paragraph. Default is 500.

`paragraphSpacer` is the spacer character or string between paragraphs. Default is `\n\n`.

## toArray

`toString(inputText [, minNumChar=500])`

It returns an Array with the paragraphs.

`inputText` is the text to be processed

`minNumChar` is the minimum number of characters for a paragraph. Default is 500.
