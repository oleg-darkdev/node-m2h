<a name="публичное_api"></a>

### [Публичное API](docs/[RU]/api[RU].md)

`.render(fileName, opts, (err) => {})` - метод принимает два аргумента и необязательный функций каллбэк.

Описание аргументов передаваемых в метод `.render`:
 1. Имя файла в формате `.md` который будет конвертироваться в формат `.html`
 2. Обьект с параметрами для конфигурации конечного файла.
  ```js
  const opts = {
    title: 'File $BASENAME in $DIRNAME',
    stylesheet: 'test/style.css',
    utf : 'utf-8'
    };
  ```
    1. Заголовок - содержимое тэга `title` в конечном файле. 
    2. Путь для стилей оформления содержимого конечного файла.
    3. Тип кодировки, для корректного отображения символов языка вашей страны.

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

  3. В каллбэк функции происходит обработка ошибок и вывод преобразованных данных в формате `.html` ( в консоль или в файл ).  
  ```js
  (err)=> {
    if (err) {
      console.error('>>>' + err);
      process.exit();
    };
  // output in console
  md.pipe(process.stdout);

  // output in file
  md.pipe(fs.createWriteStream('index.html'));  
  };
  ```

**[⬆ к оглавлению](#Оглавление)**


