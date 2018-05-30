m2h
================


This project is the fork of the project [Markdown-to-html](https://github.com/cwjohan/markdown-to-html), in it I added the ability to transfer the necessary encoding to the converted `html` file.


## Installation

#### To use the command line utilities

```
npm install m2h --save-dev
```


### Use the Markdown class to render markdown text

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

#### md.render(fileName, opts, function(err) { ... });

Optional HTML template file to be used. You can set this template instead of `title, stylesheet, utf`. The only requirement is that the template should contain a token named {markdown} to indicate where the markdown code will be placed.

Example template:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My own title</title>
    <link rel="stylesheet" href="./mycss.css">
  </head>
  <body>
    <h3>My own header</h3>
    {markdown}
    <h3>My own footer</h3>
  </body>
</html>
```

