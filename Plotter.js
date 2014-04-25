var run = require('comandante'),
    fs = require('fs');

function write(name, str, options) {
    this.write(name + ' ' + str + '\n');
    if (options && options.end) {
        this.end();
    }
    return this;
}

var gnuplot = function () {
    var plot = run('gnuplot', []);

    ['set', 'unset', 'plot', 'splot'].forEach(function (name) {
        plot[name] = write.bind(plot, name);
    });

    return plot;
}

gnuplot()
    .set('term png')
    .set('output "out.png"')
    .set('title "Some Math Functions"')
    .set('xrange [-10:10]')
    .set('yrange [-2:2]')
    .set('zeroaxis')
    .plot('(x/4)**2, sin(x), 1/x')
    .end();