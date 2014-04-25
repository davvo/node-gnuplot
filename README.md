node-gnuplot
============

A thin wrapper around gnuplot for node.js

## example

``` js
var gnuplot = require('gnuplot');
gnuplot()
    .set('term png')
    .set('output "out.png"')
    .set('title "Some Math Functions"')
    .set('xrange [-10:10]')
    .set('yrange [-2:2]')
    .set('zeroaxis')
    .plot('(x/4)**2, sin(x), 1/x')
    .end()
```

``` js
fs.createReadStream('plot.dat')
    .pipe(gnuplot().set('term svg'))
    .pipe(fs.createWriteStream('out.svg'));
```

# install

With [npm](https://npmjs.org) do:

```
npm install gnuplot
```

You need to have [gnuplot](http://www.gnuplot.info/) installed. On OSX you can do this with homebrew:

```
brew install gnuplot
```


# license

MIT
