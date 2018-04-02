# ispi

Check if the program is running on a Raspberry Pi.

## Usage
It may be used as a lib:
> `$ npm install @rodrigogs/ispi --save`
```javascript
  const ispi = require('@rodrigogs/ispi');

  // Async
  ispi()
    .then(isPi => console.log(isPi)) // true or false
    .catch(err => console.error(err));

  // Sync
  ispi.sync(); // true or false
```

Or as a cli:
> `$ npm install @rodrigogs/ispi -g`
```bash
$ ispi
true
```

## License
[Licence](https://github.com/rodrigogs/ispi/blob/master/LICENSE) © Rodrigo Gomes da Silva
