var fs = require('fs'),
    gnuplot = require('./gnuplot');

// Simple
gnuplot()
    .set('term png')
    .set('output "out.png"')
    .set('ticslevel 0')
    .splot('(x**2)*(y**2)')
    .end();

// Stream output
gnuplot()
    .set('term png')
    .set('title "Some Math Functions"')
    .set('xrange [-10:10]')
    .set('yrange [-2:2]')
    .set('zeroaxis')
    .plot('(x/4)**2, sin(x), 1/x', {end: true})
    .pipe(fs.createWriteStream('out2.png'));

// Stream input
fs.createReadStream('./dat/force.dat')
    .pipe(gnuplot()
        .set('term svg')
        .set('output "out3.svg"')
        .plot('"-" using 1:2 title "Column"')
    );

// More streams
fs.createReadStream('./dat/plot.dat')
    .pipe(gnuplot().set('term png'))
    .pipe(fs.createWriteStream('out4.png'));

// Load external file
gnuplot()
    .set('term png')
    .set('output "out5.png"')
    .plot('"./dat/force.dat" using 1:2 title "Column", "./dat/force.dat" using 1:3 title "Beam"')
    .end();

// Replot
gnuplot()
    .plot('sin(x)/x')
    .replot('sin(x)')
    .set('term png')
    .set('output "replot.png"')
    .replot()
    .end();