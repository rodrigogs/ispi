# ispi

Check if the program is running on a Raspberry Pi.

## Usage
It may be used as a lib:
> `$ npm install ispi --save`
```javascript
  const ispi = require('ispi');

  ispi()
    .then(isPi => console.log(isPi))
    .catch(err => console.error(err));
```

Or as a cli:
> `$ npm install ispi -g`
```bash
$ ispi
true
```

## License
[Licence](https://github.com/rodrigogs/ispi/blob/master/LICENSE) © Rodrigo Gomes da Silva
