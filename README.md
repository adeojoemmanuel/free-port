# freethenport
> kill running process on a port.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Freethenport is a module to  kill running process on a port either using cli or running from withing your code.


## Installation

OS X & Linux:

```sh
npm install freethenport -g
```

## Usage example

kill running process from a port using command line.
```sh
node freethenport portNumber
```
e.g
```sh
node freethenport 8129
```

kill running porcess from your code

```sh
 freeport(port)
      .then(res => console.log(res))
      .catch(error => console.error(error));
```


## Release History

* 1.0.0
    * Published on npm (module code lunched)
* 2.0.1
    * CHANGE: Update docs (module code remains unchanged)
* 2.0.2
    * CHANGE: Update docs (module code remains unchanged)
* 2.0.3
    * Updated function nameing
* 2.1.0
    * Redeveloped kill port method in function.js
* 2.3.0
    * Added windows support

## Meta

Adeojo Emmanuel – [@imm__immanuel](https://twitter.com/imm__immanuel) – emmanuel.adeojo.ibk@gmail.com

Adegoke David – [@dhaveed_](http://twitter.com/dhaveed_) – davidadegoke31@gmail.com

John Foderaro - [@johnfoderaro]() - (johnfoderaro@icloud.com)

 See [``LICENSE``](https://github.com/adeojoemmanuel/free-port/LICENSE) for more information.

[https://github.com/adeojoemmanuel/free-port](https://github.com/adeojoemmanuel/)

## Contributing

1. Fork it (<https://github.com/adeojoemmanuel/free-port/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
