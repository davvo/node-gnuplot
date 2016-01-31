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

# methods

``` js
var gnuplot = require('gnuplot')
```

## gnuplot()

Spawn a new gnuplot process and return a duplex stream combining `stdout` and `stdin`. 

## gnuplot.print(data, options={})

Write data to stdin of the gnuplot process. If the stream should be closed after the write, pass `{end: true}` as options.

## gnuplot.println(data, options={})

Same as `gnuplot.print(data + '\n', options)`

## gnuplot.set(data, options={})

Same as `gnuplot.println('set ' + data, options)`

## gnuplot.unset(data, options={})

Same as `gnuplot.println('unset ' + data, options)`

## gnuplot.plot(data, options={})

Same as `gnuplot.println('plot ' + data, options)`

## gnuplot.splot(data, options={})

Same as `gnuplot.println('splot ' + data, options)`

## gnuplot.replot(data='', options={})

Same as `gnuplot.println('replot ' + data, options)`

All of the above functions returns the gnuplot object and can be chained together:

``` js
gnuplot()
    .set('term png')
    .unset('output')
    .plot('[-6:6] sin(x)')
    .end();
```

To automatically call [end()](http://nodejs.org/api/stream.html#stream_writable_end_chunk_encoding_callback) on the input stream after a command, pass `{end: true}` as options:

``` js
gnuplot()
    .set('term png')
    .unset('output')
    .plot('[-6:6] sin(x)', {end: true})
    .pipe(fs.createWriteStream('out.png'));
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

ISC
