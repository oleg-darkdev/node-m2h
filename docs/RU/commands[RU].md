<a name="вручную_комманды"></a>
### Как подключить вручную

Чтобы подключить `m2h` в ваш проект, воспользуйтесь командами.
```javascript
const fs = require('fs');
const Markdown = require('m2h').Markdown;
const md = new Markdown();
md.bufmax = 2048;
```

Для передачи конфигурации для конечного файла используйте обьект.Описание свойств обьекта описаны [тут](#публичное_api)
```javascript
const opts = {
            title: 'File $BASENAME in $DIRNAME',
            stylesheet: 'test/style.css',
            utf : 'utf-8'};
```

Вызовите метод `.render()` и передайте ему имя начального файле в формате `.md` и ваш обьект конфигурации, в каллбэк функции не забудьте обработку ошибок и указать куда будет выводиться конечная информация ( в консоль или в файл).
```javascript
md.render('README[RU].md', opts, function(err) { ...}});
```

