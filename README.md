node-gnuplot
============

A super-thin wrapper around [gnuplot](http://www.gnuplot.info/) for node.js

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
    .end();
```
You can use streams!

``` js
var data = fs.createReadStream('input.dat'),
    out = fs.createWriteStream('output.svg'),
    plotter = gnuplot().set('term svg');
    
data.pipe(plotter).pipe(out);
```

# install

With [npm](https://npmjs.org) do:

```
npm install gnuplot
```

You need to have [gnuplot](http://www.gnuplot.info/) installed. On OSX you can do this with [homebrew](http://brew.sh/):

```
brew install gnuplot
```


# license

MIT
