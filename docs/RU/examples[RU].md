### [Примеры](docs/examples/)

```js
const fs = require('fs');
const Markdown = require('m2h').Markdown;
const md = new Markdown();
md.bufmax = 2048;

// input file
const fileName = 'README[RU].md';
const opts = {
            title: 'File $BASENAME in $DIRNAME',
            stylesheet: 'test/style.css',
            utf : 'utf-8'};

md.render(fileName, opts, function(err) {
  if (err) {
    console.error('>>>' + err);
    process.exit();
  }

  // output in console
  md.pipe(process.stdout)
  // output in file
  md.pipe(fs.createWriteStream('index.html'))
});
```


**[⬆ к оглавлению](#Оглавление)**
