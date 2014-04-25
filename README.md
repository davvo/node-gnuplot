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
