## Задание
1. Сделайте форк репозитория.
2. Установите Node JS 14.5.0
3. Создайте простой http server
    - На GET `/dir_name` выведите в консоль - /home/...путь_к_папке_проекта
    - На GET `/file_name` выведите в консоль - /home/...путь_к_папке_проекта/имя_запускаемого_файла
    - На GET `/cpus` выведите в консоль массив с информацией о каждом логическом ядре процессора
    - На GET `/number_of_cores` выведите в консоль количество ядер
    - При открытии в браузере страницы `http://localhost:8080/home.html` должна выводиться надпись **This is home page**
4. На POST запрос с телом `{ password: 'supper-secure-password' }`, сервер должен отвечать `{ isValid: true }`, при любом другом пароле `{ isValid: false }`.
    
На сервере проверку реализовать при помощи сравнения hash:
- для генерации hash используйте [функцию](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest)
    - salt = `salt`  
    - iterations = `100000`  
    - keylen = `64`  
    - digest = `sha512`  
- Buffer преобразуйте к строке с форматом `hex`

hash = `5cec006b10c424ad99b88e9cff2bb535e917c295576c5c05dd01ffc0b2ea61b52e872a4354930fbe6a9c37d6851391f850ccc9add9c432c31130782b0db7b16f`  
